import { getAllAlbums } from '@/lib/albums'
import { Card } from '@material-tailwind/react';
import type { Metadata } from 'next'
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Photos',
}

export default async function PhotosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const albums = await getAllAlbums('_limit=20');

  return (
    <div className="flex">
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <h2>Albums</h2>
        <ul>
          {albums.map(a => (
            <li key={a.id}>
              <Link href={`/albums/${a.id}`}>{a.title}</Link>
            </li>
          ))}
        </ul>
      </Card>
      <Card>
        {children}
      </Card>
    </div>
  )
}
