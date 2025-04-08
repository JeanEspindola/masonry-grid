import { describe, expect, it } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { createRoutesStub } from 'react-router'
import PhotoDetailRoute, { loader } from '~/routes/photos/photo'
import { photoFixture } from '~/test/fixtures/photoFixture'
import { meta } from '~/routes/home'

describe('photos details page', () => {
	it('should render photo detailed page correctly', async () => {
		const Stub = createRoutesStub([
			{
				path: "/photos/1234",
				Component: () => (
					<PhotoDetailRoute
						loaderData={{ photo: photoFixture }}
					/>
				),
			},
		]);

		render(<Stub initialEntries={["/photos/1234"]} initialIndex={0} />)

		const title = await waitFor(() => screen.getByRole('heading', { name: photoFixture.alt }))
		const details = await waitFor(() => screen.getByRole('heading', { name: 'Details:' }))
		const profile = await waitFor(() => screen.getByRole('heading', { name: /👤: profile/i }))
		const url = await waitFor(() => screen.getByRole('heading', { name: /🔗: url/i }))

		expect(title).toBeInTheDocument()
		expect(details).toBeInTheDocument()
		expect(profile).toBeInTheDocument()
		expect(url).toBeInTheDocument()
	})

	it('loader', async () => {
		const response = await loader({ params: { photoId: '1234' } })
		expect(response.photo).toEqual(photoFixture)
	})
})
