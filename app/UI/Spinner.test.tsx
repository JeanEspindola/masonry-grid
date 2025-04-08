import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Spinner } from '~/UI/Spinner'

describe('Spinner', () => {
	it('should render correctly', () => {
		render(<Spinner />)

		const element = screen.getByTestId('spinner')
		expect(element).toBeInTheDocument()
	})
})