import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageWrapper } from '~/UI/PageWrapper'

describe('PageWrapper', () => {
	it('should render correctly', () => {
		render(
			<PageWrapper><div>Test</div></PageWrapper>
		)

		const text = screen.getByText('Test')

		expect(text).toBeInTheDocument()
	})
})