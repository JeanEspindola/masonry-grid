export type ImageProps = {
	src: string
	alt: string | null
	color: string | null
	className?: string
}
export function Image({ src, alt, color, className }: ImageProps) {
	return (
		<img
			srcSet={src}
			alt={alt || ''}
			style={{ backgroundColor: color ? color : '#FFFFFF' }}
			loading="lazy"
			className={`w-full ${className}`}
		/>
	)
}