import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ErrorBoundaryPage } from '~/UI/ErrorBoundaryPage'
import { PageHeader } from '~/UI/PageHeader'
import { BrowserRouter } from 'react-router'

describe('ErrorBoundary', () => {
	const header = <PageHeader title="Error" />
	it('should render correctly - unknown error', () => {

		const navButton = {
			label: 'Nav Button',
			path: '/path'
		}

		const error = {
			init: {
				data: 'Test',
				status: 404,
				statusText: 'Error!!'
			}
		}

		render(
			<BrowserRouter>
				<ErrorBoundaryPage header={header} error={error} navButton={navButton} />
			</BrowserRouter>
		)

		const navLinkButton = screen.getByRole('link', { name: 'Nav Button' })

		const heading  = screen.getByRole('heading', {
			name: 'Error'
		});

		const subText = screen.getByRole('heading', {
			name: 'Error'
		})

		expect(navLinkButton).toBeInTheDocument()
		expect(heading).toBeInTheDocument()
		expect(subText).toBeInTheDocument()
	})
})