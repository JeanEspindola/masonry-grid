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
	return (
		<header className="flex flex-col items-center justify-center gap-2 w-full">
			<Link to={path} className="self-baseline">
				<Button label={label} />
			</Link>
			<Headline text={title} />
		</header>
	)
}