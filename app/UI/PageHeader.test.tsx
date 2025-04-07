import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageHeader } from '~/UI/PageHeader'
import { BrowserRouter } from 'react-router'

describe('PageHeader', () => {
	it('should render correctly', () => {
		const navButton = {
			label: 'Nav Button',
			path: '/path'
		}
		render(
			<BrowserRouter>
				<PageHeader navButton={navButton} title="This is a headline" />
			</BrowserRouter>
		)

		const navLinkButton = screen.getByRole('link', { name: 'Nav Button' })
		const heading = screen.getByRole('heading', { name: 'This is a headline' })

		expect(navLinkButton).toHaveAttribute('href', '/path')
		expect(heading).toBeInTheDocument()
	})
})