import { notFound } from 'next/navigation'
import { getAlbum } from "@/lib/albums";
import Photos from '@/components/photos';

export default async function AlbumPhotos({ params: { id } }: { params: { id: string } }) {
  const album = await getAlbum(parseInt(id)) || notFound();

  return (
    <>
      <h2>Album: {album.title}</h2>
      <Photos photos={album.photos} />
    </>
  )
}
