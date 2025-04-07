import { describe, it, expect } from 'vitest'
import { getPhotoById, getPhotosList, getSearchedPhotosList } from '~/modules/photos.server'
import { photoFixture, photoListFixture, photoSearchedListFixture } from '~/test/fixtures/photoFixture'

describe('photos.server', () => {
	it('check getSearchedPhotosList', async () => {
		const responseTest = await getSearchedPhotosList('people', 1)
		expect(await responseTest).toEqual({ ...photoSearchedListFixture })
	})

	it('check getPhotoById', async () => {
		const responseTest = await getPhotoById(31316339)
		expect(await responseTest).toEqual({ ...photoFixture })
	})

	it('check getPhotosList', async () => {
		const responseTest = await getPhotosList(1)
		expect(await responseTest).toEqual({ ...photoListFixture })
	})
})