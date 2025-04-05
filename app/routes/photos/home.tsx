import type { Route } from './+types/home'
import { getPhotos } from '~/modules/photos.server'
import type { Photo } from 'pexels'
import { Image } from '~/UI/Image'
import { PageHeader } from '~/UI/PageHeader'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Masonry Grid - Content Platform" },
    { name: "description", content: "Masonry Grid - Picsart!" },
  ]
}

export async function loader({}: Route.LoaderArgs) {
  const { photos, page} = await getPhotos(1)

  return { photos, page }
}

export default function PhotosIndexRoute({ loaderData }: Route.ComponentProps) {
  const photos = loaderData.photos as Photo[]
  const page = loaderData.page as number

  return (
    <main className="flex items-center justify-center p-4">
      <div className="flex-1 flex flex-col items-center gap-4">
        <PageHeader title="Masonry Grid - Content Platform" navButton={{ label: '← Home', path: '/' }} />
        <div className="columns-2xs w-full gap-2">
          {photos.map(item => {
            const { id, alt, avg_color, src: { original} } = item
            return (
              <div className="relative group flex items-center justify-center">
                <Image color={avg_color} className="hover:cursor-pointer hover:opacity-40 mb-2" src={original} key={id} alt={alt} />
                <span className="absolute text-xl font-bold invisible pointer-events-none group-hover:visible">Open</span>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}