import type { PropsWithChildren } from 'react'
import React from 'react'

export function PageWrapper({ children }: PropsWithChildren) {
	return (
		<main className="flex items-center justify-center p-4 w-full">
			<div className="flex flex-col items-center gap-4 h-full w-full">
				{children}
			</div>
		</main>
	)
}