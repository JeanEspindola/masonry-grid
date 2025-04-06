export type HeadlineProps = {
	text: string
}
export function Headline({ text }: HeadlineProps) {
	return (
		<h1 className="text-[clamp(1em,3vw,3em)] max-h-[132px]">{text}</h1>
	)
}