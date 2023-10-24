'use client'

import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const Dashboard = () => {
	// const [data, setData] = useState([])
	// const [err, setErr] = useState(false)
	// const [isLoading, setIsLoading] = useState(false)
	// useEffect(() => {
	// 	const getData = async () => {
	// 		setIsLoading(true)
	// 		const res = await fetch('http://jsonplaceholder.typicode.com/posts', {
	// 			cache: 'no-store'
	// 		})
	// 		if (!res.ok) {
	// 			setErr(true)
	// 		}
	// 		setData(await res.json())
	// 		setIsLoading(false)
	// 	}
	// 	getData()
	// }, [])
	// const fetcher = (...args) => fetch(...args).then(res => res.json())
	const fetcher = (...args: Parameters<typeof fetch>) =>
		fetch(...args).then(res => res.json())
	const { data, error, isLoading } = useSWR(
		'http://jsonplaceholder.typicode.com/posts',
		fetcher
	)
	return (
		<div className='flex gap-24'>
			<div className='flex-1'>
				<div className='flex justify-between items-center my-12 gap-5'>
					<div className='w-[200px] h-[200px]'>
						<Image
							className='object-cover'
							src='https://images.pexels.com/photos/18408631/pexels-photo-18408631.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
							alt=''
							width={200}
							height={100}
						/>
					</div>
					<h2 className='text-xl font-bold leading-normal'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</h2>
					<span className='cursor-pointer text-red-500'>X</span>
				</div>
			</div>
			<form className='flex-1 flex flex-col gap-5'>
				<h1>Add New Post</h1>
				<input type='text' placeholder='Title' className='input-style' />
				<input type='text' placeholder='Desc' className='input-style' />
				<input type='text' placeholder='Image' className='input-style' />
				<textarea
					placeholder='Content'
					className='input-style'
					cols={30}
					rows={10}></textarea>
				<Button text='Send' />
			</form>
		</div>
	)
}

export default Dashboard
