import type { PageServerLoad } from './$types';
import { loadDrivePage } from '$lib/server/google-drive-loader';

export const prerender = false;
export const csr = true;

export const load: PageServerLoad = async ({ url }) => {
    const { folderObj, fileID, fileURL } = await loadDrivePage('VADEMECUM', url.searchParams);
    return { vademecumObj: folderObj, fileID, fileURL };
};
