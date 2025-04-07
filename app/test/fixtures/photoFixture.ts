import type { Photo, Photos, PhotosWithTotalResults } from 'pexels'

export const photoFixture: Photo = {
	id: 31316339,
	width: 2268,
	height: 4032,
	url: 'https://www.pexels.com/photo/charming-medieval-street-in-quaint-european-village-31316339/',
	alt: 'Narrow cobblestone street lined with colorful medieval buildings in a picturesque European village.',
	photographer: 'Omair Tabikh',
	photographer_url: 'https://www.pexels.com/@omair-tabikh-301813574',
	photographer_id: 301813574,
	avg_color: '#836648',
	src: {
		original: 'https://images.pexels.com/photos/31316339/pexels-photo-31316339.jpeg',
		large2x: 'https://images.pexels.com/photos/31316339/pexels-photo-31316339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		large: 'https://images.pexels.com/photos/31316339/pexels-photo-31316339.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
		medium: 'https://images.pexels.com/photos/31316339/pexels-photo-31316339.jpeg?auto=compress&cs=tinysrgb&h=350',
		small: 'https://images.pexels.com/photos/31316339/pexels-photo-31316339.jpeg?auto=compress&cs=tinysrgb&h=130',
		portrait: 'https://images.pexels.com/photos/31316339/pexels-photo-31316339.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
		landscape: 'https://images.pexels.com/photos/31316339/pexels-photo-31316339.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
		tiny: 'https://images.pexels.com/photos/31316339/pexels-photo-31316339.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
	},
	liked: false,
}

export const photoListFixture: Photos = {
	page: 1,
	per_page: 40,
	photos: [
		{
			...photoFixture,
		},
		{
			id: 31308278,
			width: 3169,
			height: 4753,
			url: 'https://www.pexels.com/photo/vibrant-street-scene-in-shinsekai-osaka-31308278/',
			photographer: 'Bapak Moto',
			photographer_url: 'https://www.pexels.com/@bapak-moto-2150116313',
			photographer_id: 2150116313,
			avg_color: '#5B5B5D',
			src: {},
			liked: false,
			alt: 'Dynamic street view of Shinsekai, Osaka, showcasing lively signs and architecture.'
		},
		{
			id: 31309026,
			width: 6000,
			height: 4000,
			url: 'https://www.pexels.com/photo/magnificent-baroque-dome-in-naples-italy-31309026/',
			photographer: 'Gioele Gatto',
			photographer_url: 'https://www.pexels.com/@gioele-gatto-619355282',
			photographer_id: 619355282,
			avg_color: '#7A4B2F',
			src: {},
			liked: false,
			alt: 'Stunning view of a Baroque church dome in Naples showcasing intricate frescoes and architectural details.'
		},
		{
			id: 31313207,
			width: 3351,
			height: 5026,
			url: 'https://www.pexels.com/photo/charming-street-scene-in-historic-gorlitz-germany-31313207/',
			photographer: 'Nikita Pishchugin',
			photographer_url: 'https://www.pexels.com/@nikitapishchugin',
			photographer_id: 748422471,
			avg_color: '#A1957D',
			src: {},
			liked: false,
			alt: 'Beautiful street view in Görlitz, Germany, featuring Cambrinus Bierstuben and classic architecture.'
		},
	],
	next_page: 'https://api.pexels.com/v1/curated?page=2&per_page=40',
}

export const photoSearchedListFixture: PhotosWithTotalResults = {
	page: 1,
	per_page: 40,
	photos: [
		{
			...photoFixture,
		},
		{
			id: 31308278,
			width: 3169,
			height: 4753,
			url: 'https://www.pexels.com/photo/vibrant-street-scene-in-shinsekai-osaka-31308278/',
			photographer: 'Bapak Moto',
			photographer_url: 'https://www.pexels.com/@bapak-moto-2150116313',
			photographer_id: 2150116313,
			avg_color: '#5B5B5D',
			src: {},
			liked: false,
			alt: 'Dynamic street view of Shinsekai, Osaka, showcasing lively signs and architecture.'
		},
		{
			id: 31313207,
			width: 3351,
			height: 5026,
			url: 'https://www.pexels.com/photo/charming-street-scene-in-historic-gorlitz-germany-31313207/',
			photographer: 'Nikita Pishchugin',
			photographer_url: 'https://www.pexels.com/@nikitapishchugin',
			photographer_id: 748422471,
			avg_color: '#A1957D',
			src: {},
			liked: false,
			alt: 'Beautiful street view in Görlitz, Germany, featuring Cambrinus Bierstuben and classic architecture.'
		},
	],
	total_results: 3,
	next_page: 'https://api.pexels.com/v1/curated?page=2&per_page=40',
}
