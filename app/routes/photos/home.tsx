import type { Route } from './+types/home'
import { getPhotos } from '~/modules/photos.server'
import type { Photo } from 'pexels'
import { PageHeader } from '~/UI/PageHeader'
import { PhotoGridItem } from '~/UI/PhotoGridItem'
import { useEffect, useRef, useState } from 'react'
import { useFetcher } from 'react-router'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Masonry Grid - Content Platform" },
    { name: "description", content: "Masonry Grid - Picsart!" },
  ]
}

export type PhotosLoaderType = {
  photosList: Photo[]
  pageParam: number
}

export async function loader({ params, request }: Route.LoaderArgs) {
  const url = new URL(request.url)
  const pageParam = url.searchParams.get("page")

  const { photos, page} = await getPhotos(pageParam ? Number(pageParam) : 1)

  return { photosList: photos, pageParam: page }
}

export default function PhotosIndexRoute({ loaderData }: Route.ComponentProps) {
  const [photos, setPhotos] = useState(loaderData.photosList as Photo[])
  const [page, setPage] = useState(loaderData.pageParam as number)

  const fetcher= useFetcher<PhotosLoaderType>();

  const heightStyle = 'max-h-[calc(100svh_-_108px)] sm:max-h-[calc(100svh_-_116px)] md:max-h-[calc(100svh_-_140px)] lg:max-h-[calc(100svh_-_164px)] xl:max-h-[calc(100svh_-_180px)]'

  const observerTarget = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && fetcher.state !== 'loading') {
          setPage((prevPage) => {
            const nextPage = prevPage + 1;

            handleScroll(nextPage)

            return nextPage;
          })
        }
      },
      { threshold: 1 }
    );
    if (observerTarget.current) {
      observer.observe(observerTarget.current)
    }
    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current)
      }
    }
  }, [observerTarget])

  const handleScroll = (nextPage: number) => {
    const query = `?page=${nextPage}`
    fetcher.load(query)
  }

  useEffect(() => {
    if (!fetcher.data || fetcher.state === 'loading') {
      return
    }

    const { photosList, pageParam } = fetcher.data

    if (photosList.length > 0) {
      setPhotos((prevItems: Photo[]) => [...prevItems, ...photosList])
      setPage(pageParam)
    }
  }, [fetcher.data, fetcher.state])

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
          <div ref={observerTarget} className="relative sm:bottom-[300px]" />
        </div>
      </div>
    </main>
  )
}