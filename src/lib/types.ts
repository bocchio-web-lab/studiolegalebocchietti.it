export interface FileItem {
    name: string;
    type: 'file' | 'folder';
    ID: string;
    url?: string;
    children?: FileItem[];
}