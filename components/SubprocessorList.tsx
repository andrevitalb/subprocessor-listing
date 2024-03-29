import Button from "components/common/Button"
import { Modal } from "components/common/Modal"
import Table from "components/common/Table"
import { SubprocessorForm } from "components/SubprocessorForm"
import { useModal } from "contexts/ModalContext"
import { Subprocessor, useSubprocessors } from "contexts/SubprocessorsContext"
import { useState } from "react"
import { TableColumn } from "react-data-table-component"
import tw from "twin.macro"

type SubprocessorItemActions = "none" | "add" | "delete"

const tableColumns: TableColumn<Subprocessor>[] = [
	{
		name: "Name",
		cell: ({ name }) => <p>{name}</p>,
	},
	{
		name: "Purpose",
		cell: ({ purpose }) => <p>{purpose}</p>,
	},
	{
		name: "Location",
		cell: ({ location }) => <p>{location}</p>,
	},
	{
		cell: (subprocessor) => <ItemActions subprocessor={subprocessor} />,
		width: "clamp(100px, 10vw, 200px)",
	},
]

const SubprocessorList = () => {
	const { subprocessors } = useSubprocessors()
	const { show, toggleModal } = useModal()
	const [showAddNewModal, setShowAddNewModal] = useState(false)

	const handleAddNew = () => {
		setShowAddNewModal(true)
		toggleModal()
	}

	return (
		<div tw="max-w-screen-lg w-full mx-auto py-10 px-4">
			<StyledHeader>
				<h2 tw="text-2xl font-bold w-full text-center sm:w-auto">
					Subprocessors
				</h2>
				<Button
					type="button"
					onClick={handleAddNew}
					tw="block w-full my-2 sm:(w-auto my-0)"
				>
					Add Subprocessor
				</Button>
			</StyledHeader>
			<Table columns={tableColumns} data={subprocessors} fixedHeader />
			{showAddNewModal && show && (
				<Modal>
					<SubprocessorForm
						formMode="add"
						onClose={() => {
							toggleModal()
							setShowAddNewModal(false)
						}}
					/>
				</Modal>
			)}
		</div>
	)
}

const ItemActions = ({ subprocessor }: { subprocessor: Subprocessor }) => {
	const { id, name } = subprocessor
	const { deleteSubprocessor } = useSubprocessors()
	const [actionTaken, setActionTaken] =
		useState<SubprocessorItemActions>("none")
	const { show, toggleModal } = useModal()

	const handleAction = (action: SubprocessorItemActions) => {
		toggleModal()
		setActionTaken(action)
	}

	return (
		<>
			<ItemActionsWrapper>
				<ActionButton type="button" onClick={() => handleAction("add")}>
					Edit
				</ActionButton>
				<ActionButton
					type="button"
					onClick={() => handleAction("delete")}
				>
					Delete
				</ActionButton>
			</ItemActionsWrapper>
			{actionTaken !== "none" && show && (
				<Modal>
					{actionTaken === "add" && (
						<SubprocessorForm
							subprocessor={subprocessor}
							formMode="edit"
							onClose={() => handleAction("none")}
						/>
					)}
					{actionTaken === "delete" && (
						<>
							<p tw="mb-6">
								Are you sure you want to delete {name}?
							</p>
							<ItemActionsWrapper>
								<Button
									onClick={() => {
										deleteSubprocessor(id)
										handleAction("none")
									}}
								>
									Yes, delete
								</Button>
								<Button
									onClick={() => handleAction("none")}
									type="button"
									color="transparent"
								>
									Cancel
								</Button>
							</ItemActionsWrapper>
						</>
					)}
				</Modal>
			)}
		</>
	)
}

const StyledHeader = tw.header`flex flex-wrap items-center justify-between w-full`
const ItemActionsWrapper = tw.div`flex flex-wrap justify-end items-center space-x-4 w-full`
const ActionButton = tw.button`font-semibold hover:underline py-2`

export default SubprocessorList
