import { getAllAlbums } from '@/lib/albums'
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
    <>
      <aside>
        <h2>Albums</h2>
        <ul>
          {albums.map(a => (
            <li key={a.id}>
              <Link href={`/albums/${a.id}`}>{a.title}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <main>
        {children}
      </main>
    </>
  )
}
