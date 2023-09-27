import { getAllPhotos } from "@/lib/photos";

export default async function Home() {
  const photos = await getAllPhotos('_limit=10');

  return (
    <>
      <h2>Photos</h2>
      <ul>
        {photos.map(p => (
          <li key={p.id}>
            <p>{p.id}: {p.title}</p>
            <img src={p.thumbnailUrl} alt={p.title} width={150} height={150} />
          </li>
        ))}
      </ul>
    </>
  )
}
