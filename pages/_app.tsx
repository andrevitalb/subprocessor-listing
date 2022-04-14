import { ModalProvider } from "contexts/ModalContext"
import { SubprocessorsProvider } from "contexts/SubprocessorsContext"
import { ComponentType } from "react"
import "styles/globals.css"
import { GlobalStyles } from "twin.macro"

/**
 * The App component implicitly wraps every page component. This code runs
 * client-side and server-side.
 *
 * @see https://nextjs.org/docs/advanced-features/custom-app
 */
export default function App<Props>({
	Component,
	pageProps,
}: {
	Component: ComponentType<Props>
	pageProps: Props
}) {
	return (
		<ModalProvider>
			<SubprocessorsProvider>
				<GlobalStyles />
				<Component {...pageProps} />
			</SubprocessorsProvider>
		</ModalProvider>
	)
}
