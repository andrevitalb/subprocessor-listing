import tw, { styled, TwStyle } from "twin.macro"

type Sizes = "sm" | "md" | "lg"
type Colors = "teal" | "transparent"

interface ButtonProps {
	size?: Sizes
	color?: Colors
	rounded?: Sizes
}

const colors: Record<Colors, TwStyle> = {
	teal: tw`bg-teal-400 border-teal-400 hover:(bg-teal-300 border-teal-300)`,
	transparent: tw`bg-transparent border-teal-400 text-teal-400 hover:bg-gray-100`,
}

const roundedSizes: Record<Sizes, TwStyle> = {
	sm: tw`rounded-sm`,
	md: tw`rounded-md`,
	lg: tw`rounded-lg`,
}

const sizes: Record<Sizes, TwStyle> = {
	sm: tw`text-sm p-2`,
	md: tw`text-base px-7 py-3`,
	lg: tw`text-lg px-20 py-5`,
}

const Button = styled.button<ButtonProps>(
	({ color = "teal", size = "md", rounded = "lg" }: ButtonProps) => [
		tw`
        font-bold text-white
		border-2
        disabled:cursor-default
    `,
		colors[color],
		roundedSizes[rounded],
		sizes[size],
	],
)

export default Button
