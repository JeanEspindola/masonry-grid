import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Image } from '~/UI/Image'

describe('Image', () => {
	it('should render correctly', () => {
		render(<Image color="#FFF" src="http://image.path.com" alt="Image title" />)

		const button = screen.getByRole('img', { name: 'Image title' })
		expect(button).toHaveStyle('background-color: rgb(255, 255, 255);')
	})
})