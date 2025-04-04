import type { Route } from "./+types/photo";
import { getPhotoById } from "~/modules/photos.server";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Masonry Grid - Detailed Photo" },
    { name: "description", content: "Masonry Grid - Detailed!" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const photo = await getPhotoById(Number(params.photoId))
  return { message: 'Hello Detailed Photo', photo }
}


export default function PhotoDetailRoute({ loaderData: { message, photo } }: Route.ComponentProps) {
  console.log(photo)

  return (
    <div>
      {message}
    </div>
  )
}