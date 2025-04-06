import { Link } from 'react-router'
import { Button } from '~/UI/Button'
import { Headline } from '~/UI/Headline'

export type PageHeaderProps = {
	title: string
	navButton: {
		path: string
		label: string
	}
}

export function PageHeader({ title, navButton: { path, label }}: PageHeaderProps) {
	const heightStyle = 'h-[100px] sm:h-[110px] md:h-[132px] lg:h-[156px] xl:h-[172px]'
	return (
		<header className={`flex flex-col items-center gap-2 w-full ${heightStyle}`}>
			<Link to={path} className="self-baseline">
				<Button label={label} />
			</Link>
			<Headline text={title} />
		</header>
	)
}