'use client'

import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

const DarkModeToggle = () => {
	const { mode, toggleMode } = useContext(ThemeContext)
	return (
		<div
			className='w-11 h-6 border border-primary rounded-full flex justify-between items-center p-[2px] cursor-pointer relative'
			onClick={toggleMode}>
			<div className='text-xs'>🌙</div>
			<div className='text-xs'>🔆</div>
			<div
				className={`w-[15px] h-[15px] rounded-full bg-primary absolute ${
					mode === 'light' ? 'left-[2px]' : 'right-[2px]'
				}`}
			/>
		</div>
	)
}

export default DarkModeToggle
