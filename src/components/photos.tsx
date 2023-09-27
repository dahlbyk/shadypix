import { Photo } from "@/lib/photos";

export default async function Photos({ photos }: { photos: Photo[] }) {
  return (
    <>
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
