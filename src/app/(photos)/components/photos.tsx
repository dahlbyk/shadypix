import { Photo } from "@/lib/photos";

export default async function Photos({ photos }: { photos: Photo[] }) {
  return (
    <div className="">
      <div className="carousel gap-2">
        {photos.map(p => (
          <div key={p.id} className="carousel-item">
            <div className="">
              <img src={p.url} alt='' width={300} height={300} />
              <p className="truncate w-[300px]">{p.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
