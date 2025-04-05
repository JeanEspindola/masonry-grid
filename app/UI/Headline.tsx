export type HeadlineProps = {
	text: string
}
export function Headline({ text }: HeadlineProps) {
	return (
		<h1 className="text-[4vw]">{text}</h1>
	)
}