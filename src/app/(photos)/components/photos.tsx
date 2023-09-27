import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Photo } from "@/lib/photos";
import { cn } from "@/lib/utils"

interface PhotosProps {
  photos: Photo[]
}

interface PhotoProps extends React.HTMLAttributes<HTMLDivElement> {
  photo: Photo
  width?: number
  height?: number
}

export default function Photos({
  photos
}: PhotosProps) {
  return (
    <>
      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {photos.map((photo) => (
              <Photo
                key={photo.id}
                photo={photo}
                className="w-[300px]"
                width={300}
                height={300}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  )
}

export function Photo({
  photo,
  width,
  height,
  className,
  ...props
}: PhotoProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="overflow-hidden rounded-md">
        <img
          src={photo.url}
          alt=''
          width={width}
          height={height}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105",
            width !== height ? "aspect-[3/4]" : "aspect-square"
          )}
        />
      </div>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{photo.title}</h3>
      </div>
    </div>
  )
}