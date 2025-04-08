import { describe, it, expect } from 'vitest'
import { getPhotoById, getPhotosList, getSearchedPhotosList } from '~/modules/photos.server'
import { photoFixture, photoListFixture, photoSearchedListFixture } from '~/test/fixtures/photoFixture'

describe('photos.server', () => {
	it('check getSearchedPhotosList', async () => {
		const response = await getSearchedPhotosList('people', 1)
		expect(response.status).toEqual(200)
		expect(await response.json()).toEqual({ ...photoSearchedListFixture })
	})

	it('check getPhotoById', async () => {
		const response = await getPhotoById(31316339)
		expect(response.status).toEqual(200)
		expect(await response.json()).toEqual({ ...photoFixture })
	})

	it('check getPhotosList', async () => {
		const response = await getPhotosList(1)
		expect(response.status).toEqual(200)
		expect(await response.json()).toEqual({ ...photoListFixture })
	})
})