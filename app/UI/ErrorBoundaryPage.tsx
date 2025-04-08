import React  from 'react'
import { isRouteErrorResponse, Link } from 'react-router'
import { PageWrapper } from '~/UI/PageWrapper'
import { Button } from '~/UI/Button'

export type ErrorBoundaryPageProps = {
	navButton: {
		path: string
		label: string
	}
	error: unknown
	header: React.ReactNode
}

export function ErrorBoundaryPage({ error, header, navButton: { path, label } }: ErrorBoundaryPageProps) {
	let childNode: React.ReactNode = <h1 className="text-xl font-semibold">Unknown Error</h1>
	if (isRouteErrorResponse(error)) {
		childNode = (
			<>
				<h1 className="text-[clamp(1em,2vw,3em)] font-semibold">
					{error.status} {error.statusText}
				</h1>
				<p className="text-[clamp(0.75em,2vw,1.5em)]">{error.data}</p>
			</>
		)
	}
	return (
		<PageWrapper>
			<Link to={path} className="self-baseline">
				<Button label={label} />
			</Link>
			{header}
			<div className="flex flex-col w-[300px] lg:w-1/3 h-[400px] gap-8 items-center justify-center bg-red-100 opacity-80 border-2 border-solid border-red-800 rounded-md text-red-800 p-2">
				{childNode}
			</div>
		</PageWrapper>
	)
}