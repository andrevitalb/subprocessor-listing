import { ComponentType } from "react"
import "styles/globals.css"
import '../styles/globals.css'
import type { AppProps } from 'next/app'

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
				<Component {...pageProps} />
	)
}

export default MyApp
