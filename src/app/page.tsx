import { getAllAlbums } from "@/lib/albums";
import { getAllPhotos } from "@/lib/photos";

export default async function Home() {
  const albums = await getAllAlbums('_limit=20');
  const photos = await getAllPhotos('_limit=10');

  return (
    <main>
      <h2>Albums</h2>
      <ul>
        {albums.map(a => (
          <li key={a.id}>
            <p>{a.id}: {a.title}</p>
          </li>
        ))}
      </ul>
      <h2>Photos</h2>
      <ul>
        {photos.map(p => (
          <li key={p.id}>
            <p>{p.id}: {p.title}</p>
            <img src={p.thumbnailUrl} alt={p.title} width={150} height={150} />
          </li>
        ))}
      </ul>
    </main>
  )
}
