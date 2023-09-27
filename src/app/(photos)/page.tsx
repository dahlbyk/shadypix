import type { Metadata } from "next";
import Photos from "@/components/photos";
import { getAllPhotos } from "@/lib/photos";

export const metadata: Metadata = {
  title: 'All Photos',
}

export default async function Home() {
  const photos = await getAllPhotos('_limit=10');

  return (
    <>
      <h2>Photos</h2>
      <Photos photos={photos} />
    </>
  )
}
