import { getAllAlbums } from '@/lib/albums'
import type { Metadata } from 'next'

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
              <p>{a.id}: {a.title}</p>
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
