import { createFolderStructure, findUrlById, findFirstFileId } from '$lib/server/google-drive';
import { DEFAULT_DRIVE_IDS } from '$lib/index';

export interface DrivePageResult {
    folderObj: any;
    fileID: string;
    fileURL: string;
}

/**
 * @brief Generic loader for Drive-based pages (curricula, vademecum, etc.)
 * @param key - one of 'CURRICULA' | 'VADEMECUM'
 * @param searchParams - optional URLSearchParams from the load function
 */
export async function loadDrivePage(
    key: 'CURRICULA' | 'VADEMECUM',
    searchParams?: URLSearchParams
): Promise<DrivePageResult> {
    let folderId: string;
    let defaultFileId: string;

    if (key === 'CURRICULA') {
        folderId = DEFAULT_DRIVE_IDS.CURRICULA_FOLDER_ID;
        defaultFileId = DEFAULT_DRIVE_IDS.CURRICULA_DEFAULT_FILE_ID;
    } else {
        folderId = DEFAULT_DRIVE_IDS.VADEMECUM_FOLDER_ID;
        defaultFileId = DEFAULT_DRIVE_IDS.VADEMECUM_DEFAULT_FILE_ID;
    }

    // Build folder tree
    const folderObj = await createFolderStructure(folderId);

    // Handle prerender-safe case
    let requestedFileId: string | null = null;
    try {
        requestedFileId = searchParams?.get('ID') ?? null;
    } catch {
        // searchParams unavailable during prerender
    }

    const fileID =
        requestedFileId || defaultFileId || findFirstFileId(folderObj);

    if (!fileID) throw new Error(`No files found in ${key.toLowerCase()} folder`);

    const fileURL = findUrlById(folderObj, fileID);
    if (!fileURL) throw new Error(`File with ID ${fileID} not found`);

    return { folderObj, fileID, fileURL };
}
