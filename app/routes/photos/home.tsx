import type { Route } from './+types/home'
import { getPhotos } from '~/modules/photos.server'
import type { Photo } from 'pexels'
import { PageHeader } from '~/UI/PageHeader'
import { PhotoGridItem } from '~/UI/PhotoGridItem'

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
  console.log(photos)
  const page = loaderData.page as number

  const heightStyle = 'max-h-[calc(100svh_-_108px)] sm:max-h-[calc(100svh_-_116px)] md:max-h-[calc(100svh_-_140px)] lg:max-h-[calc(100svh_-_164px)] xl:max-h-[calc(100svh_-_180px)]'

  return (
    <main className="flex items-center justify-center p-4 w-full">
      <div className="flex flex-col items-center gap-4 w-full">
        <PageHeader title="Masonry Grid - Content Platform" navButton={{ label: '← Home', path: '/' }} />
        <div className={`flex flex-col overflow-y-auto w-full -mt-10 ${heightStyle}`}>
          <div className={`columns-2xs w-full gap-2 h-full`}>
            {photos.map(item => {
              const { id, alt, avg_color, src: { original, medium} } = item

              return (
               <PhotoGridItem alt={alt} imageSrc={medium} backgroundColor={avg_color} photoId={id} key={id} />
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}