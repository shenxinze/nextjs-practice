import Button from '@/components/Button/Button'
import Image from 'next/image'
import { items } from './data'
import { notFound } from 'next/navigation'

type Cat = keyof typeof items
type CategoryProps = {
	params: {
		category: Cat
	}
}
const getData = (cat: Cat) => {
	const data = items[cat]
	if (data) {
		return data
	}
	return notFound()
}

const Category: React.FC<CategoryProps> = ({ params }) => {
	const data = getData(params.category)
	return (
		<div>
			<h1 className='text-primary'>{params.category}</h1>
			{data.map((item, i) => (
				<div
					key={item.id}
					className={`flex gap-12 mt-12 mb-24 ${
						i % 2 !== 0 && 'flex-row-reverse'
					}`}>
					<div className='flex-1 flex flex-col gap-5'>
						<h2 className='text-5xl'>{item.title}</h2>
						<p className='text-xl'>{item.desc}</p>
						<Button url='#' text='See More' />
					</div>
					<div className='flex-1 h-[500px] relative'>
						<Image src={item.image} fill alt='' className='object-cover' />
					</div>
				</div>
			))}
			{/* <div className={`flex gap-12 mt-12 mb-24 flex-row-reverse`}>
				<div className='flex-1 flex flex-col gap-5'>
					<h2>Test</h2>
					<p>Desc</p>
					<Button url='#' text='See More' />
				</div>
				<div className='flex-1 h-[500px] relative'>
					<Image
						src='https://images.pexels.com/photos/16995242/pexels-photo-16995242.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
						fill
						alt=''
						className='object-cover'
					/>
				</div>
			</div>
			<div className={`flex gap-12 mt-12 mb-24`}>
				<div className='flex-1 flex flex-col gap-5'>
					<h2>Test</h2>
					<p>Desc</p>
					<Button url='#' text='See More' />
				</div>
				<div className='flex-1 h-[500px] relative'>
					<Image
						src='https://images.pexels.com/photos/16995242/pexels-photo-16995242.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
						fill
						alt=''
						className='object-cover'
					/>
				</div>
			</div>
			<div className={`flex gap-12 mt-12 mb-24 flex-row-reverse`}>
				<div className='flex-1 flex flex-col gap-5'>
					<h2>Test</h2>
					<p>Desc</p>
					<Button url='#' text='See More' />
				</div>
				<div className='flex-1 h-[500px] relative'>
					<Image
						src='https://images.pexels.com/photos/16995242/pexels-photo-16995242.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
						fill
						alt=''
						className='object-cover'
					/>
				</div>
			</div> */}
		</div>
	)
}

export default Category
