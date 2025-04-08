import { Form, useLocation } from 'react-router'
import { useDebounceSubmit } from 'remix-utils/use-debounce-submit'

export type SearchInputProps = {
	query: string
}
export function SearchInput({ query }: SearchInputProps) {
	const submit = useDebounceSubmit()
	const location = useLocation()

	return (
		<div className="flex flex-row -mt-10 w-full">
			<Form
				action={location.pathname}
				onSubmit={event => {
					event.preventDefault()
					// @ts-expect-error debounce type not defined
					submit(event.target.form, {
						debounceTimeout: 0,
					})
				}}
				className="w-full"
			>
					<input
						name="query"
						type="text"
						defaultValue={query}
						placeholder="Search photos"
						className="h-10 w-full flex-grow rounded-md border border-solid border-gray-300 px-3 text-sm text-gray-800 placeholder:text-gray-300 hover:border-gray-400 focus:outline-none"
						onChange={event => {
							submit(event.target.form, {
								debounceTimeout: 300,
							})
						}}
						onBlur={event => {
							submit(event.target.form, {
								debounceTimeout: 0,
							})
						}}
					/>

			</Form>
		</div>
	)
}