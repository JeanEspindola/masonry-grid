import type { Route } from './+types/home'
import { getPhotosList, getSearchedPhotosList } from '~/modules/photos.server'
import { PageHeader } from '~/UI/PageHeader'
import { PhotoGridItem } from '~/UI/PhotoGridItem'
import React, { useEffect, useRef, useState } from 'react'
import { data, Link, useFetcher, useSearchParams } from 'react-router'
import { PageWrapper } from '~/UI/PageWrapper'
import { ErrorBoundaryPage } from '~/UI/ErrorBoundaryPage'
import { Button } from '~/UI/Button'
import { SearchInput } from '~/UI/SearchInput'
import { LoadingItem } from '~/UI/LoadingItem'
import type { Photo, SearchCuratedPhotos } from '~/utils/types'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Masonry Grid - Content Platform" },
    { name: "description", content: "Masonry Grid - Picsart!" },
  ]
}

export type PhotosLoaderType = {
  photosList: Photo[]
  pageParam: number
  query: string
  nextPage: string | null
}

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url)
  const pageParam = url.searchParams.get("page")
  const query = url.searchParams.get("query") || ''

  let response

  if (query !== '') {
    response = await getSearchedPhotosList(query, pageParam ? Number(pageParam) : 1)
  } else {
    response = await getPhotosList(pageParam ? Number(pageParam) : 1)
  }

  if (response.status !== 200) {
    throw data('Could not fetch photo list', { status: 404 })
  }

  const { photos, page, next_page } = await response.json() as SearchCuratedPhotos

  return { photosList: photos, pageParam: page, query, nextPage: next_page }
}

export default function PhotosIndexRoute({ loaderData }: Route.ComponentProps) {
  const [searchParams] = useSearchParams()
  const [photos, setPhotos] = useState(loaderData.photosList)
  const [page, setPage] = useState(loaderData.pageParam as number)
  const [loading, setLoading] = useState(false)
  const [endOfPage, setEndOfPage] = useState(false)
  const [shouldFetch, setShouldFetch] = useState(loaderData.nextPage !== undefined)

  const fetcher= useFetcher<PhotosLoaderType>()

  const scrollRef = useRef(null)

  useEffect(() => {
    setPhotos(loaderData.photosList)
    setShouldFetch(true)
    setPage(1)
    scrollToTop()
  }, [loaderData.photosList])

  const heightStyle = 'max-h-[calc(100svh_-_164px)] sm:max-h-[calc(100svh_-_172px)] md:max-h-[calc(100svh_-_196px)] lg:max-h-[calc(100svh_-_220px)] xl:max-h-[calc(100svh_-_236px)]'

  const observerTarget = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (endOfPage && fetcher.state === 'idle' && shouldFetch) {
      setLoading(true)
      handleScroll(page + 1)
      setPage(page + 1)
    }
  }, [endOfPage])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setEndOfPage(true)
        }
      },
      { threshold: 1 }
    )
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
    const hasQueryParam = searchParams.has('query') && searchParams.get('query') !== ''
    const query = hasQueryParam ? `?${searchParams.toString()}&page=${nextPage}` : `?page=${nextPage}`

    fetcher.load(query)
  }

  useEffect(() => {
    if (!fetcher.data || fetcher.state === 'loading') {
      return
    }

    const { photosList, nextPage } = fetcher.data

    if (!nextPage) {
      setShouldFetch(false)
    }

    if (photosList && photosList.length > 0) {
      setPhotos((prevItems: Photo[]) => [...prevItems, ...photosList])
    }
    setLoading(false)
    setEndOfPage(false)
  }, [fetcher.data, fetcher.state])

  const scrollToTop = () => {
    // Check if the scrollRef is defined and scroll to the top
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0
    }
  };

  return (
    <PageWrapper>
      <Link to="/" className="self-baseline">
        <Button label="← Home" />
      </Link>
      <PageHeader title="Masonry Grid - Content Platform" />
      <SearchInput query={loaderData.query as string} />
      <div ref={scrollRef} className={`flex flex-col overflow-y-auto w-full ${heightStyle}`}>
        <div className={`columns-2xs w-full gap-2 h-full`}>
          {photos.map(item => {
            const { id, alt, avg_color, src: { original, medium}, height, width } = item

            return (
             <PhotoGridItem alt={alt} imageSrc={medium} backgroundColor={avg_color} photoId={id} key={id} height={height} width={width} />
            )
          })}
        </div>
        <div ref={observerTarget} className="relative sm:bottom-[300px]" />
        {loading ? <LoadingItem /> : null}
      </div>
    </PageWrapper>
  )
}

export function ErrorBoundary({error}: Route.ErrorBoundaryProps) {
  const header = <PageHeader title="Masonry Grid - Content Platform"/>

  return (
    <ErrorBoundaryPage error={error} header={header} navButton={{label: '← Home', path: '/'}}/>
  )
}