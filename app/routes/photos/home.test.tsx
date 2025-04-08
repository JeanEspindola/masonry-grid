import { describe, expect, it } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { createRoutesStub } from 'react-router'
import PhotosIndexRoute, { loader } from '~/routes/photos/home'
import { photoListFixture } from '~/test/fixtures/photoFixture'

describe('photos list page', () => {
	it('should render home page correctly', async () => {
		const Stub = createRoutesStub([
			{
				path: "/photos",
				Component: () => (
					// @ts-ignore
					<PhotosIndexRoute
						loaderData={{ photosList: photoListFixture.photos, pageParam: 1  }}
					/>
				),
			},
		]);

		// render the app stub at "/login"
		render(<Stub initialEntries={["/photos"]} initialIndex={0} />);

		const title = await waitFor(() => screen.getByRole('heading', { name: 'Masonry Grid - Content Platform' }))
		const img1 = await waitFor(() => screen.getByRole('img', { name: 'Narrow cobblestone street lined with colorful medieval buildings in a picturesque European village.' }))
		const img2 = await waitFor(() => screen.getByRole('img', { name: 'Stunning view of a Baroque church dome in Naples showcasing intricate frescoes and architectural details.'}))
		const img3 = await waitFor(() => screen.getByRole('img', { name: 'Beautiful street view in Görlitz, Germany, featuring Cambrinus Bierstuben and classic architecture.' }))

		expect(title).toBeInTheDocument()
		expect(img1).toBeInTheDocument()
		expect(img2).toBeInTheDocument()
		expect(img3).toBeInTheDocument()
	})

	it('loader', async () => {
		const request = new Request('http://app.com/photos?page=1', {})
		const response = await loader({ params: {}, context: {} , request  })
		expect(response.photosList).toEqual(photoListFixture.photos)
		expect(response.pageParam).toEqual(1)
	})
})
