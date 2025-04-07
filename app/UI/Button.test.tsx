import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
	it('should render correctly', () => {
		render(<Button label="Test Button" />)

		const button = screen.getByRole('button', { name: 'Test Button' })
		expect(button).toBeInTheDocument()
	})
})