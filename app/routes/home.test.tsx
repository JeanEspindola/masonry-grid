import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router'
import HomePage from '~/routes/home'

describe('home page', () => {
	it('should render home page correctly', () => {
		render(
			<BrowserRouter>
				<HomePage />
			</BrowserRouter>
		)

		const title = screen.getByText('Welcome to Content Platform Picsart Assignment')
		const subTitle = screen.getByText('Solution by Jean Espindola')
		const navLinkButton = screen.getByRole('link', { name: 'Photo Masonry Grid' })

		expect(navLinkButton).toHaveAttribute('href', '/photos')
		expect(title).toBeInTheDocument()
		expect(subTitle).toBeInTheDocument()
	})
})
