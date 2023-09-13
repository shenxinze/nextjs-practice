import Link from 'next/link'
import React from 'react'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'

const links = [
	{ id: 1, title: 'Home', url: '/' },
	{ id: 2, title: 'Portfolio', url: '/portfolio' },
	{ id: 3, title: 'Blog', url: '/blog' },
	{ id: 4, title: 'About', url: '/about' },
	{ id: 5, title: 'Contact', url: '/contact' },
	{ id: 6, title: 'Dashboard', url: '/dashboard' }
]
const Navbar = () => {
	return (
		<div className='h-24 flex justify-between items-center'>
			<Link href='/' className=' font-semibold text-2xl'>
				lamamia
			</Link>
			<div className='flex items-center gap-5'>
				<DarkModeToggle />
				{links.map(link => (
					<Link href={link.url} key={link.id}>
						{link.title}
					</Link>
				))}
				<button className='p-1 border-none bg-green-500 text-white cursor-pointer rounded'>
					Logout
				</button>
			</div>
		</div>
	)
}

export default Navbar