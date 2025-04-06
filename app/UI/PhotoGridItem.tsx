import { Image } from '~/UI/Image'
import { NavLink } from 'react-router'

export type PhotoGridItemProps = {
	photoId: number
	imageSrc: string
	alt: string | null
	backgroundColor: string | null
}
export function PhotoGridItem({ imageSrc, alt, backgroundColor, photoId }: PhotoGridItemProps) {
	return (
		<NavLink
			to={`/photos/${photoId}`}
			className="relative group flex items-center justify-center"
			prefetch="intent"
		>
			<Image color={backgroundColor} className="hover:cursor-pointer hover:opacity-40 mb-2" src={imageSrc} alt={alt} />
			<span className="absolute text-lg p-2 invisible pointer-events-none group-hover:visible border-solid border-white border bg-black opacity-50 text-white">VIEW →</span>
		</NavLink>
	)
}