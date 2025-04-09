export type Photo = {
	id: number
	width: number
	height: number
	url: string
	photographer: string
	photographer_url: string
	photographer_id: number
	alt: string | null
	avg_color: string | null
	liked: boolean
	src: {
		original: string
		large2x: string
		large: string
		medium: string
		small: string
		portrait: string
		landscape: string
		tiny: string
	}
}

export type SearchCuratedPhotos = {
	page: number
	per_page: number
	prev_page?: string
	next_page?: string
	total_results: number
	photos: Photo[]
}