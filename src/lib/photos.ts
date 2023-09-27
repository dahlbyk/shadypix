export type Photo = {
    id: number;
    albumId: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export async function getAllPhotos(params: string | URLSearchParams = '') {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?${params}`);
    if (!res.ok) {
        throw new Error('Failed to fetch photos!');
    }

    return await res.json() as Photo[];
}