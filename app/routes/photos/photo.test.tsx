import { describe, expect, it } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { createRoutesStub } from 'react-router'
import PhotoDetailRoute, { loader } from '~/routes/photos/photo'
import { photoFixture } from '~/test/fixtures/photoFixture'

describe('photos details page', () => {
	it('should render photo detailed page correctly', async () => {
		const Stub = createRoutesStub([
			{
				path: "/photos/1234",
				Component: () => (
					<PhotoDetailRoute
						// @ts-ignore
						loaderData={{ photo: photoFixture }}
						params={{ photoId: '1234'}}
					/>
				),
			},
		])

		render(<Stub initialEntries={["/photos/1234"]} initialIndex={0} />)

		const title = await waitFor(() => screen.getByRole('heading', { name: 'Narrow cobblestone street lined with colorful medieval buildings in a picturesque European village.' }))
		const details = await waitFor(() => screen.getByRole('heading', { name: 'Details:' }))
		const profile = await waitFor(() => screen.getByRole('heading', { name: /👤: profile/i }))
		const url = await waitFor(() => screen.getByRole('heading', { name: /🔗: url/i }))

		expect(title).toBeInTheDocument()
		expect(details).toBeInTheDocument()
		expect(profile).toBeInTheDocument()
		expect(url).toBeInTheDocument()
	})

	it('loader', async () => {
		const request = new Request('http://app.com/photos/1234', {})
		const response = await loader({ params: { photoId: '1234' }, context: {} , request })
		expect(await response.photo).toEqual(photoFixture)
	})
})
