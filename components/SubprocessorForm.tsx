import Button from "components/common/Button"
import {
	ErrorWrapper,
	FieldContext,
	FieldLabel,
	TextField,
} from "components/common/form-fields"
import { Subprocessor, useSubprocessors } from "contexts/SubprocessorsContext"
import { ErrorMessage, Form, Formik } from "formik"
import * as Yup from "yup"

const SubprocessorFormSchema = Yup.object({
	name: Yup.string().required("A name is required"),
	purpose: Yup.string().required("A purpose is required"),
	location: Yup.string().required("A location is required"),
})

export const SubprocessorForm = ({
	subprocessor,
	formMode,
	onClose,
}: {
	subprocessor?: Subprocessor
	formMode: "add" | "edit"
	onClose: () => void
}) => {
	const { upsertSubprocessor } = useSubprocessors()
	const initialValues = !!subprocessor
		? subprocessor
		: {
				name: "",
				purpose: "",
				location: "",
		  }

	return (
		<Formik
			initialValues={initialValues}
			enableReinitialize={true}
			validationSchema={SubprocessorFormSchema}
			onSubmit={(values) => {
				try {
					upsertSubprocessor({
						...values,
						id: !!subprocessor ? subprocessor.id : "",
					})
					onClose()
				} catch (e) {
					console.error(e)
				}
			}}
		>
			<Form tw="w-full">
				<h2 tw="font-bold text-xl mb-6">{`${formMode[0].toUpperCase()}${formMode.substring(
					1,
				)} Subprocessor`}</h2>
				<FieldContext className="w-full" name="name">
					<FieldLabel>
						Name
						<TextField name="name" />
						<ErrorMessage component={ErrorWrapper} name="name" />
					</FieldLabel>
				</FieldContext>
				<FieldContext className="w-full" name="purpose">
					<FieldLabel>
						Purpose
						<TextField name="purpose" />
						<ErrorMessage component={ErrorWrapper} name="purpose" />
					</FieldLabel>
				</FieldContext>
				<FieldContext className="w-full" name="location">
					<FieldLabel>
						Location
						<TextField name="location" />
						<ErrorMessage
							component={ErrorWrapper}
							name="location"
						/>
					</FieldLabel>
				</FieldContext>
				<div tw="flex items-center justify-end space-x-2 mt-4">
					<Button>Save</Button>
					<Button color="transparent" type="button" onClick={onClose}>
						Cancel
					</Button>
				</div>
			</Form>
		</Formik>
	)
}
