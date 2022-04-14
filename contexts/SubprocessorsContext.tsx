import { mockSubprocessors } from "lib/sampleData"
import { noop } from "lodash"
import { createContext, ReactNode, useContext, useState } from "react"
import * as uuid from "uuid"

export interface Subprocessor {
	id: string
	name: string
	purpose: string
	location: string
}

interface SubprocessorsContextProps {
	subprocessors: Subprocessor[]
	upsertSubprocessor: (subprocessor: Subprocessor) => void
	deleteSubprocessor: (subprocessorId: string) => void
}

const SubprocessorsContext = createContext<SubprocessorsContextProps>({
	subprocessors: [],
	upsertSubprocessor: noop,
	deleteSubprocessor: noop,
})

export const useSubprocessors = (): SubprocessorsContextProps => {
	return useContext(SubprocessorsContext)
}

export const SubprocessorsProvider = ({
	children,
}: {
	children: ReactNode
}) => {
	const [subprocessors, setSubprocessors] =
		useState<Subprocessor[]>(mockSubprocessors)

	const upsertSubprocessor = (subprocessor: Subprocessor) => {
		const decoratedSubprocessor = {
			...subprocessor,
			id: subprocessor.id ?? uuid.v4(),
		}

		setSubprocessors([
			...subprocessors.filter(({ id }) => id !== subprocessor.id),
			decoratedSubprocessor,
		])
	}

	const deleteSubprocessor = (subprocessorId: string) => {
		setSubprocessors(
			subprocessors.filter(({ id }) => id !== subprocessorId),
		)
	}

	return (
		<SubprocessorsContext.Provider
			value={{
				subprocessors,
				upsertSubprocessor,
				deleteSubprocessor,
			}}
		>
			{children}
		</SubprocessorsContext.Provider>
	)
}
