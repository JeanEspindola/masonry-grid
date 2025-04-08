import type { Route } from './+types/photo'
import { getPhotoById } from '~/modules/photos.server'
import { type Photo } from 'pexels'
import { PageHeader } from '~/UI/PageHeader'
import { Await, Link } from 'react-router'
import React from 'react'
import { PageWrapper } from '~/UI/PageWrapper'
import { ErrorBoundaryPage } from '~/UI/ErrorBoundaryPage'
import { Spinner } from '~/UI/Spinner'
import { Button } from '~/UI/Button'
import { PhotoDetailPage } from '~/UI/PhotoDetailPage'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Masonry Grid - Detailed Photo" },
    { name: "description", content: "Masonry Grid - Detailed!" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const photo: Promise<Photo> = getPhotoById(Number(params.photoId)
  ).then(res => res.json())

  return { photo }
}

export default function PhotoDetailRoute({ loaderData }: Route.ComponentProps) {
  const { photo } = loaderData

  const label= '← Back to Grid'
  const path = '/photos'

  return (
    <PageWrapper>
      <Link to={path} className="self-baseline">
        <Button label={label} />
      </Link>
      <React.Suspense fallback={<Spinner />}>
        <Await resolve={photo}>
          {(photo) => (
            <PhotoDetailPage photo={photo} />
          )}
        </Await>
      </React.Suspense>
    </PageWrapper>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const header = <PageHeader title="Error"  />

  return (
    <ErrorBoundaryPage error={error} header={header} navButton={{ label: '← Back to Grid', path: '/photos' }} />
  )
}