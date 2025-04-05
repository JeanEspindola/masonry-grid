import { createClient, type Photo, type Photos } from 'pexels'
import { getEnv } from '~/config/env.server'

const client = createClient(getEnv().API_KEY as string)

const PAGE_SIZE = 40

export async function getPhotoById(photoId: number) {
  return client.photos.show({ id: photoId }).then(response => {
    if ("error" in response) {
      throw "error"
    } else {
      return response as Photo
    }
  })
}

export async function getPhotos(page: number) {
  return client.photos.curated({ per_page: PAGE_SIZE, page })
    .then(response => {
      if ("error" in response) {
        throw "error"
      } else {
        return response as Photos
      }
    })
}
