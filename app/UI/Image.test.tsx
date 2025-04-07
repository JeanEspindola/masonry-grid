import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Image } from '~/UI/Image'

describe('Image', () => {
	it('should render correctly', () => {
		render(<Image color="#FFF" src="http://image.path.com" alt="Image title" />)

		const img = screen.getByRole('img', { name: 'Image title' })
		expect(img).toHaveStyle('background-color: rgb(255, 255, 255);')
	})
})