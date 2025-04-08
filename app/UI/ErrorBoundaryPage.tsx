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
	console.log(error)
	let childNode: React.ReactNode = <h1 className="text-xl font-semibold">Unknown Error</h1>
	// @ts-ignore
	if (isRouteErrorResponse(error) || error.init.status === 404) {
		childNode = (
			<>
				<h1 className="text-[clamp(1em,2vw,3em)] font-semibold">
					{/* error object not typed, it can be of 2 different errors here*/}
					{/* @ts-ignore*/}
					{error.status || error.init.status} {error.statusText}
				</h1>
				{/* @ts-ignore */}
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