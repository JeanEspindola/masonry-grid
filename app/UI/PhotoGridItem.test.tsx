import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router'
import { PhotoGridItem } from '~/UI/PhotoGridItem'

describe('PhotoGridItem', () => {
	it('should render correctly', () => {
		render(
			<BrowserRouter>
				<PhotoGridItem photoId={1234} alt="Image title" backgroundColor="#000" imageSrc="http://image.path.com" height={100} width={100} />
			</BrowserRouter>
		)

		const navLinkButton = screen.getByRole('link', { name: 'Image title VIEW →' })
		const img = screen.getByRole('img', { name: 'Image title' })

		expect(navLinkButton).toHaveAttribute('href', '/photos/1234')
		expect(img).toHaveStyle('background-color: rgb(0, 0, 0);')
	})

	it('should render correctly - missing props', () => {
		render(
			<BrowserRouter>
				<PhotoGridItem photoId={1234} imageSrc="http://image.path.com" height={100} width={100} alt={null} backgroundColor={null} />
			</BrowserRouter>
		)

		const navLinkButton = screen.getByRole('link', { name: 'VIEW →' })
		expect(navLinkButton).toHaveAttribute('href', '/photos/1234')
	})
})