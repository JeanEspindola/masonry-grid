import type { Route } from './+types/photo'
import { getPhotoById } from '~/modules/photos.server'
import { type Photo } from 'pexels'
import { Image } from '~/UI/Image'
import { PageHeader } from '~/UI/PageHeader'

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Masonry Grid - Detailed Photo" },
    { name: "description", content: "Masonry Grid - Detailed!" },
  ];
}

export type PhotoType = Photo

export async function loader({ params }: Route.LoaderArgs) {
  const photo = await getPhotoById(Number(params.photoId))
  return { photo }
}


export default function PhotoDetailRoute({ loaderData }: Route.ComponentProps) {
  const { alt, src: { original}, photographer, avg_color, photographer_url, url} = loaderData.photo as Photo

  return (
    <main className="flex items-center justify-center p-4">
      <div className="flex-1 flex flex-col items-center gap-8 h-full">
        <PageHeader title={alt || ''} navButton={{ label: '← Back to Grid', path: '/photos' }} />
        <div className="flex flex-col md:flex-row w-full h-full gap-4">
          <Image src={original} alt={alt} color={avg_color} className="md:w-2/3 rounded-md"/>
          <div className="md:w-1/3 flex flex-col h-full border border-solid border-gray-800 rounded p-2 md:border-none">
            <h2 className="flex items-center justify-center mb-4 text-2xl">Details</h2>
            <h3>Photo by: <span className="font-semibold">{photographer}</span></h3>
            <h4>👤: <a href={photographer_url} target="_blank" className="text-blue-500 underline underline-offset-2">Profile</a></h4>
            <h4>🔗: <a href={url} target="_blank" className="text-blue-500 underline underline-offset-2">url</a>
            </h4>
          </div>
        </div>
      </div>
    </main>
  )
}