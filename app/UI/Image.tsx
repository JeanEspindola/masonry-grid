export type ImageProps = {
	src: string
	alt: string | null
	color: string | null
	className?: string
}
export function Image({ src, alt, color, className}: ImageProps) {
	return (
		<img
			src={src}
			alt={alt || ''}
			style={{ backgroundColor: color }}
			loading="lazy"
			className={`w-full ${className}`}
		/>
	)
}