import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageHeader } from '~/UI/PageHeader'
import { BrowserRouter } from 'react-router'

describe('PageHeader', () => {
	it('should render correctly', () => {
		render(
			<BrowserRouter>
				<PageHeader title="This is a headline" />
			</BrowserRouter>
		)

		const heading = screen.getByRole('heading', { name: 'This is a headline' })
		expect(heading).toBeInTheDocument()
	})
})