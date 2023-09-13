'use client'

import { createContext, useState, useCallback } from 'react'

export const ThemeContext = createContext({
	mode: 'dark',
	toggleMode: () => {}
})

type ThemeProviderProps = {
	children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [mode, setMode] = useState('dark')
	const toggleMode = useCallback(() => {
		setMode(prevMode => (prevMode === 'dark' ? 'light' : 'dark'))
	}, [])
	const contextValue = {
		mode,
		toggleMode
	}
	return (
		<ThemeContext.Provider value={contextValue}>
			<div className={`theme ${mode}`}>{children}</div>
		</ThemeContext.Provider>
	)
}
