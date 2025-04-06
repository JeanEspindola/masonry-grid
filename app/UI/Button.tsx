export type ButtonProps = {
	label: string
}

export function Button({ label }: ButtonProps) {
	return (
		<button className="text-xs sm:text-base bg-gray-300 py-1 px-2 rounded-lg cursor-pointer hover:bg-black hover:text-white">
			{label}
		</button>
	)
}