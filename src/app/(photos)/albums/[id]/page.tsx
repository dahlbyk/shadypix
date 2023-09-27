import { notFound } from 'next/navigation'
import { getAlbum } from "@/lib/albums";

export default async function AlbumPhotos({ params: { id } }: { params: { id: string } }) {
  const album = await getAlbum(parseInt(id)) || notFound();

  return (
    <>
      <h2>Album: {album.title}</h2>
      <ul>
        {album.photos.map(p => (
          <li key={p.id}>
            <p>{p.id}: {p.title}</p>
            <img src={p.thumbnailUrl} alt={p.title} width={150} height={150} />
          </li>
        ))}
      </ul>
    </>
  )
}
