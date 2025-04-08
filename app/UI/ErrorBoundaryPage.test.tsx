import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ErrorBoundaryPage } from '~/UI/ErrorBoundaryPage'
import { PageHeader } from '~/UI/PageHeader'
import React from 'react'
import { BrowserRouter, ErrorResponse } from 'react-router'

describe('ErrorBoundary', () => {
	const header = <PageHeader title="Error" navButton={{ label: '← Back to Grid', path: '/photos' }} />
	it('should render correctly - unknown error', () => {
		const error: ErrorResponse = {
			data: 'Test',
			status: 404,
			statusText: 'Error!!'

		}
		render(
			<BrowserRouter>
				<ErrorBoundaryPage header={header} error={error} />
			</BrowserRouter>
		)

		const button = screen.getByRole('button', {
			name: '← Back to Grid'
		})

		const heading  = screen.getByRole('heading', {
			name: 'Error'
		});

		const subText = screen.getByRole('heading', {
			name: 'Unknown Error'
		})

		expect(button).toBeInTheDocument()
		expect(heading).toBeInTheDocument()
		expect(subText).toBeInTheDocument()
	})
})