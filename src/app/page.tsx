import { getAllPhotos } from "@/lib/photos";

export default async function Home() {
  const photos = await getAllPhotos();

  return (
    <main>
      <ul>
        {photos.map(p => (
          <li key={p.id}>
            <img src={p.thumbnailUrl} alt={p.title} width={150} height={150} />
          </li>
        ))}
      </ul>
    </main>
  )
}
