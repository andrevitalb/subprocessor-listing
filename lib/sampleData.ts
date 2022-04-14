import { Subprocessor } from "contexts/SubprocessorsContext"
import * as uuid from "uuid"

export const mockSubprocessors: Subprocessor[] = [
	{
		id: uuid.v4(),
		name: "Fastly",
		purpose: "CDN",
		location: "USA",
	},
	{
		id: uuid.v4(),
		name: "Heroku",
		purpose: "Hosting",
		location: "USA",
	},
	{
		id: uuid.v4(),
		name: "SendGrid",
		purpose: "Email Deliverability",
		location: "USA",
	},
]
