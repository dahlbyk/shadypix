import { getAllAlbums } from '@/lib/albums'
import type { Metadata } from 'next'
import { Sidebar } from './components/sidebar';

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
    <div className="border-t">
      <div className="bg-background">
        <div className="grid lg:grid-cols-5">
          <Sidebar albums={albums} className="hidden lg:block" />
          <div className="col-span-3 lg:col-span-4 lg:border-l">
            <div className="h-full px-4 py-6 lg:px-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
