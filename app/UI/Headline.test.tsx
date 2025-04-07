import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Headline } from '~/UI/Headline'

describe('Headline', () => {
	it('should render correctly', () => {
		render(<Headline text="This is a headline" />)

		const button = screen.getByRole('heading', { name: 'This is a headline' })
		expect(button).toBeInTheDocument()
	})
})