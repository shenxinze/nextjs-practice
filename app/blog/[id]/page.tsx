import Image from 'next/image'
import { notFound } from 'next/navigation'

type BlogPostProps = {
	params: {
		id: number
	}
}

async function getData(id: number) {
	const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`, {
		cache: 'no-store'
	})
	if (!res.ok) {
		// throw new Error('Failed to fetch data')
		return notFound()
	}
	return res.json()
}

const BlogPost: React.FC<BlogPostProps> = async ({ params }) => {
	const data = await getData(params.id)
	return (
		<div>
			<div className='flex'>
				<div className='flex-1 flex flex-col justify-between'>
					<h1 className='text-4xl'>{data.title}</h1>
					<p className='text-lg font-light'>{data.body}</p>
					<div className='flex items-center gap-3'>
						<Image
							src='https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1600'
							alt=''
							width={40}
							height={40}
							className='object-cover rounded-full'
						/>
						<span className=''>username</span>
					</div>
				</div>
				<div className='flex-1 h-80 relative'>
					<Image
						className='object-cover'
						src='https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1600'
						alt=''
						fill
					/>
				</div>
			</div>
			<div className='mt-12 text-xl font-light text-[#999] text-justify flex flex-col gap-5 leading-normal'>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
					harum autem, non animi facere dolore perspiciatis porro aperiam
					quibusdam, fugiat est dolores asperiores eum consectetur illo beatae
					incidunt, molestiae aliquam.
				</p>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
					harum autem, non animi facere dolore perspiciatis porro aperiam
					quibusdam, fugiat est dolores asperiores eum consectetur illo beatae
					incidunt, molestiae aliquam.
				</p>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
					harum autem, non animi facere dolore perspiciatis porro aperiam
					quibusdam, fugiat est dolores asperiores eum consectetur illo beatae
					incidunt, molestiae aliquam.
				</p>
			</div>
		</div>
	)
}

export default BlogPost
