import { ReactNode } from "react"
import tw from "twin.macro"

export const Modal = ({ children }: { children: ReactNode }) => {
	return (
		<ModalContainer>
			<ModalWrapper>
				<ModalElement>{children}</ModalElement>
			</ModalWrapper>
		</ModalContainer>
	)
}

const ModalContainer = tw.div`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 z-10`
const ModalWrapper = tw.div`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20`
const ModalElement = tw.div`rounded-md p-8 bg-white z-30 w-[max-content] max-w-[calc(100vw - 2rem)]`
