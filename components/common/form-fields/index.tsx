import { Field, useFormikContext } from "formik"
import { get } from "lodash"
import tw, { styled } from "twin.macro"

export function FieldContext<Values>({
	name,
	...props
}: { name: keyof Values } & React.HTMLAttributes<HTMLDivElement>) {
	const form = useFormikContext<Values>()
	const hasError = get(form.touched, name) && Boolean(get(form.errors, name))
	return (
		<div
			{...props}
			className={`${props.className ?? ""} ${hasError ? "hasError" : ""}`}
		>
			{props.children}
		</div>
	)
}

export const FieldLabel = styled.label`
	${tw`flex flex-col text-base font-semibold`}
	.hasError & {
		${tw`text-red-500`}
	}
`

export const TextField = styled(Field)`
	${tw`block p-2 rounded-md border-2 border-gray-300 my-2 w-full`}
	.hasError & {
		${tw`border-red-500`}
	}
`

export const ErrorWrapper = styled.div`
	${tw`hidden text-xs text-red-500`}
	.hasError & {
		${tw`block`}
	}
`
