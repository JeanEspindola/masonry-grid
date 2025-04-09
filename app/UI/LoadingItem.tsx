export function LoadingItem() {
	return (
		<div className="mx-auto w-full rounded-md border border-gray-200">
			<div className="flex w-full animate-pulse space-x-4">
				<div className="w-full h-12 rounded-md flex items-center justify-center bg-gray-200">
					<span className="text-[clamp(0.75em,2vw,1em)]">Loading...</span>
				</div>
			</div>
		</div>
	)
}