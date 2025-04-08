export type ImageProps = {
	src: string
	alt: string | null
	color: string | null
	className?: string
	width: number
	height: number
}
export function Image({ src, alt, color, className, height, width }: ImageProps) {
	return (
		<img
			srcSet={src}
			alt={alt || ''}
			style={{ backgroundColor: color ? color : '#FFFFFF' }}
			loading="lazy"
			className={`w-full ${className}`}
			height={height}
			width={width}
		/>
	)
}