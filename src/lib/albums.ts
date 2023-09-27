import { Photo } from "./photos";

export type Album = {
    id: number;
    title: string;
    userId: number;
}

export async function getAllAlbums(params: string | URLSearchParams = '') {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums?${params}`);
    if (!res.ok) {
        throw new Error('Failed to fetch albums!');
    }

    return await res.json() as Album[];
}

export async function getAlbum(id: number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}?_embed=photos`);
    if (!res.ok) {
        if (res.status === 404) return null;

        console.warn(res);
        throw new Error(`Failed to fetch album ${id}!`);
    }

    return await res.json() as Album & { photos: Photo[] };
}
