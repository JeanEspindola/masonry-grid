import type { Photo } from 'pexels'
import { PageHeader } from '~/UI/PageHeader'
import { Image } from '~/UI/Image'
import { data } from 'react-router'

export type ResponseError = {
	status: number
	code: string
}

export function PhotoDetailPage({photo}: { photo: Photo }) {
	if ("status" in photo) {
		let dataText = 'Unknown error'

		if (photo.status === 404) {
			dataText = 'Photo Not Found'
		}

		if (photo.status === 429) {
			dataText = 'Too many requests.... slow down'
		}
		//photo.status
		throw data(dataText, { status: 404 })
	}

	const { alt, src: {medium, large, original}, photographer, avg_color, photographer_url, url, height, width} = photo

	const imageSrc = `${medium} 768w, ${large} 1024w, ${original} 1536w`
	const heightStyle = 'max-h-[calc(100svh_-_148px)] sm:max-h-[calc(100svh_-_156px)] md:max-h-[calc(100svh_-_180px)] lg:max-h-[calc(100svh_-_204px)] xl:max-h-[calc(100svh_-_220px)]'

	return (
		<>
			<PageHeader title={alt || 'There is no title for this photo!'} />
			<div className={`flex flex-col md:flex-row w-full h-full gap-4 overflow-y-auto ${heightStyle}`}>
				<Image src={imageSrc} alt={alt} color={avg_color} className="md:w-2/3 rounded-md object-contain" width={width} height={height} />
				<div className="md:w-1/3 flex flex-col h-full border border-solid border-gray-800 rounded p-2 md:border-none">
					<h2 className="flex items-center mb-3 text-2xl">Details:</h2>
					<h3>Photo by: <span className="font-semibold">{photographer}</span></h3>
					<h4>👤: <a href={photographer_url} target="_blank" className="text-blue-500 underline underline-offset-2">Profile</a></h4>
					<h4>🔗: <a href={url} target="_blank" className="text-blue-500 underline underline-offset-2">url</a></h4>
				</div>
			</div>
		</>
	)
}
