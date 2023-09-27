import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

import { Album } from "@/lib/albums";
import Link from "next/link";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  albums: Album[]
}

export function Sidebar({ className, albums }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="py-2">
          <div className="space-y-1 p-3">
            <Link
              className={cn(buttonVariants({ variant: 'ghost' }), 'w-full justify-start font-normal')}
              href='/'>
              All Photos
            </Link>
          </div>
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Albums
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
              {albums?.map(album => (
                <Link
                  key={album.id}
                  className={cn(buttonVariants({ variant: 'ghost' }), 'w-full justify-start font-normal')}
                  href={`/albums/${album.id}`}>
                  {album.title}
                </Link>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}