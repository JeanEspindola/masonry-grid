import type { Route } from "./+types/home"
import { getPhotos } from "~/modules/photos.server";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Masonry Grid - Content Platform" },
    { name: "description", content: "Masonry Grid - Picsart!" },
  ]
}

export async function loader({}: Route.LoaderArgs) {
  const response = await getPhotos(1)
  const { photos, page } = response
  return { message: 'Hello Content Grid', photos, page }
}

export default function PhotosIndexRoute({ loaderData: { message, photos, page} }: Route.ComponentProps) {
  console.log(photos)
  console.log(page)

  return (
    <div>
      {message}
    </div>
  )
}
