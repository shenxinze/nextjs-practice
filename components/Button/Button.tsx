import Link from 'next/link'

type ButtonProps = {
	text: string
	url?: string
}

const Button: React.FC<ButtonProps> = ({ text, url }) => {
	return (
		<Link href={url ?? ''}>
			<button className='px-5 py-3.5 cursor-pointer bg-primary border-none rounded-md max-w-max text-white'>
				{text}
			</button>
		</Link>
	)
}

export default Button
