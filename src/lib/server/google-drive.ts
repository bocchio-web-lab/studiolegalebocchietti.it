// src/lib/server/google-drive.ts
import { google } from 'googleapis';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN } from '$env/static/private';
import type { FileItem } from '$lib/types';

// Initialize Google Drive client
function getDriveClient() {
    const oauth2Client = new google.auth.OAuth2(
        GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET
    );

    oauth2Client.setCredentials({
        refresh_token: GOOGLE_REFRESH_TOKEN
    });

    return google.drive({ version: 'v3', auth: oauth2Client });
}

// Create folder structure recursively
export async function createFolderStructure(folderId: string): Promise<FileItem> {
    const drive = getDriveClient();

    try {
        const folderMeta = await drive.files.get({
            fileId: folderId,
            fields: 'name'
        });

        const result: FileItem = {
            name: folderMeta.data.name || 'Root',
            type: 'folder',
            ID: folderId,
            children: []
        };

        // List contents of the folder
        const response = await drive.files.list({
            q: `'${folderId}' in parents and trashed = false`,
            fields: 'files(id, name, mimeType)',
            orderBy: 'name'
        });

        const files = response.data.files || [];

        // Process each item
        for (const file of files) {
            const isFolder = file.mimeType === 'application/vnd.google-apps.folder';

            if (isFolder && file.id) {
                // Recursively process subfolders
                const subfolder = await createFolderStructure(file.id);
                result.children!.push(subfolder);
            } else {
                // Add file
                result.children!.push({
                    name: file.name || 'Untitled',
                    type: 'file',
                    ID: file.id || '',
                    url: file.id ? `https://drive.google.com/uc?export=download&id=${file.id}` : ''
                });
            }
        }

        // Sort children with numeric prefix priority
        result.children!.sort((a, b) => {
            const numA = parseInt(a.name.match(/^(\d+)/)?.[1] || '');
            const numB = parseInt(b.name.match(/^(\d+)/)?.[1] || '');

            if (!isNaN(numA) && !isNaN(numB)) {
                return numA - numB;
            }
            if (!isNaN(numA)) return -1;
            if (!isNaN(numB)) return 1;

            return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
        });

        return result;

    } catch (error) {
        console.error('Error fetching Google Drive folder:', error);
        throw new Error(`Failed to fetch folder structure: ${error}`);
    }
}

// Find URL by file ID
export function findUrlById(node: FileItem, targetId: string): string | null {
    if (node.ID === targetId && node.url) {
        return node.url;
    }

    if (node.children) {
        for (const child of node.children) {
            const result = findUrlById(child, targetId);
            if (result) return result;
        }
    }

    return null;
}

// Find first file ID in structure
export function findFirstFileId(node: FileItem): string | null {
    if (node.type === 'file' && node.ID) {
        return node.ID;
    }

    if (node.children) {
        for (const child of node.children) {
            const result = findFirstFileId(child);
            if (result) return result;
        }
    }

    return null;
}