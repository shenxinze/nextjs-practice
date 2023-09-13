import Link from 'next/link'
import React from 'react'

const Portfolio = () => {
	return (
		<div>
			<h1 className='my-5 text-3xl'>Choose a gallery</h1>
			<div className='flex gap-24'>
				<Link
					href='/portfolio/illustrations'
					className='border-[5px] border-[#bbb] rounded-md w-[300px] h-[400px] relative bg-img-illustrations bg-cover group'>
					<span className='absolute right-2.5 bottom-2.5 text-[40px] font-bold group-hover:text-primary'>
						Illustrations
					</span>
				</Link>
				<Link
					href='/portfolio/websites'
					className='border-[5px] border-[#bbb] rounded-md w-[300px] h-[400px] relative bg-img-websites bg-cover group'>
					<span className='absolute right-2.5 bottom-2.5 text-[40px] font-bold group-hover:text-primary'>
						Websites
					</span>
				</Link>
				<Link
					href='/portfolio/application'
					className='border-[5px] border-[#bbb] rounded-md w-[300px] h-[400px] relative bg-img-application bg-cover group'>
					<span className='absolute right-2.5 bottom-2.5 text-[40px] font-bold group-hover:text-primary'>
						Application
					</span>
				</Link>
			</div>
		</div>
	)
}

export default Portfolio
