import React from 'react'

type LayoutProps = {
	children: React.ReactNode
}

const layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div>
			<h1 className='text-8xl'>Our Works</h1>
			{children}
		</div>
	)
}

export default layout
