import { noop } from "lodash"
import { createContext, ReactNode, useContext, useState } from "react"

interface ModalContextProps {
	show: boolean
	toggleModal: () => void
}

const ModalContext = createContext<ModalContextProps>({
	show: false,
	toggleModal: () => noop,
})

export const useModal = (): ModalContextProps => {
	return useContext(ModalContext)
}

export const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [modalShow, setModalShow] = useState<boolean>(false)

	const toggleModal = () => setModalShow(!modalShow)

	return (
		<ModalContext.Provider value={{ show: modalShow, toggleModal }}>
			{children}
		</ModalContext.Provider>
	)
}
