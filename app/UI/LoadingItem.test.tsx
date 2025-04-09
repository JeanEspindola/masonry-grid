import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Image } from '~/UI/Image'
import { LoadingItem } from '~/UI/LoadingItem'

describe('LoadingItem', () => {
	it('should render correctly', () => {
		render(<LoadingItem />)

		const text = screen.getByText('Loading...')
		expect(text).toBeInTheDocument()
	})
})