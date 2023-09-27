import type { Metadata } from 'next';
import { notFound } from 'next/navigation'
import { getAlbum } from "@/lib/albums";
import Photos from '@/app/(photos)/components/photos';

type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params: { id } }: Props
): Promise<Metadata> {
  const album = await getAlbum(parseInt(id));

  return {
    title: `Photos for Album: ${album?.title || 'Not Found'}`
  }
}

export default async function AlbumPhotos({ params: { id } }: Props) {
  const album = await getAlbum(parseInt(id)) || notFound();

  return (
    <>
      <h2>Album: {album.title}</h2>
      <Photos photos={album.photos} />
    </>
  )
}
