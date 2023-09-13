import Button from '@/components/Button/Button'
import Image from 'next/image'

const About = () => {
  return (
		<div>
			<div className='w-full h-[300px] relative'>
				<Image
					className='object-cover grayscale'
					src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1600'
					fill={true}
					alt=''
				/>
				<div className='absolute left-5 bottom-5 bg-primary p-1.5 text-white'>
					<h1>Digital Storytellers</h1>
					<h2>Handcrafting award winning digital experiences</h2>
				</div>
			</div>
			<div className='flex gap-24'>
				<div className='flex-1 mt-12 flex flex-col gap-8'>
					<h1>Who Are We?</h1>
					<p className='text-lg font-light text-justify'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
						numquam neque earum doloremque minima obcaecati, architecto dolores
						quos fuga? Perferendis nemo, qui eveniet rerum dolore molestiae
						laborum ex optio delectus!
						<br />
						<br />
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
						doloremque inventore asperiores rerum. Perspiciatis magni molestiae
						delectus omnis totam dolorum accusamus ex expedita, fugiat possimus
						provident ut non! In, exercitationem.
					</p>
				</div>
				<div className='flex-1 mt-12 flex flex-col gap-8'>
					<h1>What We Do?</h1>
					<p className='text-lg font-light text-justify'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
						numquam neque earum doloremque minima obcaecati, architecto dolores
						quos fuga? Perferendis nemo, qui eveniet rerum dolore molestiae
						laborum ex optio delectus!
						<br />
						<br /> - Dynamic Websites
						<br />
						<br /> - Fast and Handy Mobile
						<br />
						<br /> - Mobile Apps
					</p>
					<Button url='/contact' text='Contact' />
				</div>
			</div>
		</div>
	)
}

export default About