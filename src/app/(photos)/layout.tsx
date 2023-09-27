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
    <div className='w-full'>
      <aside className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-4">
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Albums</label>
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="p-4 w-80 min-h-full bg-base-200 text-base-content">
            <ul className="menu">
              <li><Link href="/">All Photos</Link></li>
            </ul>
            <h2 className='text-base-content'>Albums</h2>
            <ul className="menu">
          {albums.map(a => (
            <li key={a.id}>
              <Link href={`/albums/${a.id}`}>{a.title}</Link>
            </li>
          ))}
            </ul>
          </div>
        </div>
      </aside>
    </div>
  )
}
