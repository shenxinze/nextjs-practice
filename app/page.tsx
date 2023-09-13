import Button from '@/components/Button/Button'
import Image from 'next/image'
import Hero from 'public/hero.png'

export default function Home() {
	return (
		<div className='flex items-center gap-[100px]'>
			<div className='flex-1 flex flex-col gap-12'>
				<h1 className='text-[72px] font-bold bg-gradient-to-b from-[#194c33] to-[#bbb] text-transparent bg-clip-text'>
					Better design for you digital products.
				</h1>
				<p className=' text-[24px] font-medium'>
					Turning your Idea into Reality.We bring together the teams from the
					global tech industry.
				</p>
				<Button url='/portfolio' text='See our Works' />
			</div>
			<div className='flex-1 flex'>
				<Image
					src={Hero}
					alt='hero'
					className='w-full h-[500px] object-contain animate-[homeImgMove_3s_ease_infinite_alternate]'
				/>
			</div>
		</div>
	)
}
