'use client'

import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

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
	console.log('data', data)
	return <div>Dashboard</div>
}

export default Dashboard
