import Button from '@/components/Button/Button'
import Image from 'next/image'
import Link from 'next/link'

type DataItem = {
	userId: number
	id: number
	title: string
	body: string
}

async function getData() {
	const res = await fetch('http://jsonplaceholder.typicode.com/posts', {
		cache: 'no-store'
	})
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}

const Blog = async () => {
	const data = await getData()
	return (
		<div>
			{data.map((item: DataItem) => (
				<Link
					href={`/blog/${item.id}`}
					className={`flex gap-12 mt-12 mb-24`}
					key={item.id}>
					<div className='flex-1 h-[500px] relative'>
						<Image
							src='https://images.pexels.com/photos/16995242/pexels-photo-16995242.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
							fill
							alt=''
							className='object-cover'
						/>
					</div>
					<div className='flex-1 flex flex-col gap-5'>
						<h2>{item.title}</h2>
						<p>{item.body}</p>
					</div>
				</Link>
			))}
		</div>
	)
}

export default Blog
