import type { Metadata } from "next";
import Photos from "@/app/(photos)/components/photos";
import { Separator } from "@/components/ui/separator";
import { getAllPhotos } from "@/lib/photos";

export const metadata: Metadata = {
  title: 'All Photos',
}

export default async function Home() {
  const photos = await getAllPhotos('_limit=10');

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            All Photos
          </h2>
        </div>
      </div>
      <Separator className="my-4" />
      <Photos photos={photos} />
    </>
  )
}
