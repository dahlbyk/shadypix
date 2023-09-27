import type { Metadata } from 'next';
import { notFound } from 'next/navigation'
import { getAlbum } from "@/lib/albums";
import Photos from '@/app/(photos)/components/photos';
import { Separator } from '@/components/ui/separator';

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
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Album: {album.title}
          </h2>
        </div>
      </div>
      <Separator className="my-4" />
      <Photos photos={album.photos} />
    </>
  )
}
