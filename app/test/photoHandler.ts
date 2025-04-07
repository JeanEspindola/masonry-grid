import { http, HttpResponse } from 'msw'
import { photoFixture, photoListFixture, photoSearchedListFixture } from '~/test/fixtures/photoFixture'

export const handlers = [
  // get searched photo list
  http.get('*/v1/search', () =>
    HttpResponse.json({ ...photoSearchedListFixture }),
  ),

  // get searched photo list
  http.get('*/v1/curated', () =>
    HttpResponse.json({ ...photoListFixture }),
  ),

  // get searched photo list
  http.get('*/v1/photos/:photoId', () =>
    HttpResponse.json({ ...photoFixture }),
  ),
]
