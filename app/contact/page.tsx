import Button from '@/components/Button/Button'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
	return (
		<div>
			<h1 className=' text-6xl mb-24 text-center'>Let's Keep in Touch</h1>
			<div className='flex gap-[100px] items-center'>
				<div className='flex-1 h-[500px] relative'>
					<Image
						src='/contact.png'
						alt=''
						fill
						className='object-contain animate-[contactImgMove_3s_ease_infinite_alternate]'
					/>
				</div>
				<form action='' className='flex-1 flex flex-col gap-5'>
					<input type='text' placeholder='name' className='input-style' />
					<input type='text' placeholder='email' className='input-style' />
					<textarea
						cols={30}
						rows={10}
						placeholder='message'
						className='input-style'></textarea>
					<Button url='#' text='Send' />
				</form>
			</div>
		</div>
	)
}

export default Contact
