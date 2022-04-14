import { Page } from "components/common/layout/layout.atoms"
import SubprocessorList from "components/SubprocessorList"
import Head from "next/head"

export default function Home() {
	return (
		<div>
			<Head>
				<title>Subprocessor Listing</title>
				<meta charSet="utf-8" />
				<meta name="theme-color" content="#000" />
				<meta name="title" content="Subprocessor Listing" />
				<meta name="application-name" content="André Vital" />
				<meta name="description" content="Subprocessor Listing" />
				<meta name="author" content="André Vital" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1"
				/>
			</Head>
			<Page>
				<SubprocessorList />
			</Page>
		</div>
	)
}
