import type { PageServerLoad } from './$types';
import { loadDrivePage } from '$lib/server/google-drive-loader';

export const prerender = false; // disable static prerender, dynamic query support
export const csr = true;

export const load: PageServerLoad = async ({ url }) => {
    const { folderObj, fileID, fileURL } = await loadDrivePage('CURRICULA', url.searchParams);
    return { curriculaObj: folderObj, fileID, fileURL };
};
