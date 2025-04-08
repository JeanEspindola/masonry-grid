import { getEnv } from '~/config/env.server'

const PAGE_SIZE = 40

const headers = {
  headers: {
    Authorization: getEnv().API_KEY,
  }
}

export async function getPhotoById(photoId: number) {
  return fetch(`https://api.pexels.com/v1/photos/${photoId}`, { ...headers })
}

export async function getPhotosList(page: number) {
  return fetch(`https://api.pexels.com/v1/curated?page=${page}&per_page=${PAGE_SIZE}`, { ...headers })
}

export async function getSearchedPhotosList(query: string, page: number) {
  return fetch(`https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=${PAGE_SIZE}`, { ...headers })
}