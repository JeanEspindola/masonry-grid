import { Headline } from '~/UI/Headline'

export type PageHeaderProps = {
	title: string
}

export function PageHeader({ title }: PageHeaderProps) {
	const heightStyle = 'h-[52px] sm:h-[62px] md:h-[84px] lg:h-[108px] xl:h-[124px]'
	return (
		<header className={`flex flex-col items-center gap-2 w-full ${heightStyle}`}>
			<Headline text={title} />
		</header>
	)
}