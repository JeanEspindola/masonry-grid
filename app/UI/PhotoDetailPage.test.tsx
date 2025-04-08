import { describe, expect, it } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { PhotoDetailPage } from './PhotoDetailPage'
import { photoFixture } from '~/test/fixtures/photoFixture'

describe('PhotoDetailPage', () => {
	it('should render correctly', async () => {
		render(
			<PhotoDetailPage photo={photoFixture} />
		)

		const title = await waitFor(() => screen.getByRole('heading', { name: 'Narrow cobblestone street lined with colorful medieval buildings in a picturesque European village.' }))
		const details = await waitFor(() => screen.getByRole('heading', { name: 'Details:' }))
		const profile = await waitFor(() => screen.getByRole('heading', { name: /👤: profile/i }))
		const url = await waitFor(() => screen.getByRole('heading', { name: /🔗: url/i }))

		expect(title).toBeInTheDocument()
		expect(details).toBeInTheDocument()
		expect(profile).toBeInTheDocument()
		expect(url).toBeInTheDocument()
	})
})