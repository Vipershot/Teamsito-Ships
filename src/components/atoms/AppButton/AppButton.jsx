import React from 'react'

export const AppButton = ({ children, variant = 'primary', bold, ...rest }) => {
	const stylesVariant = `${variant === 'ghost' && 'text-gray-500 hover:bg-gray-100'} ${variant === 'primary' && 'bg-gray-700 text-white border hover:bg-gray-600'} `

	const style = `flex gap-2 items-center py-2 px-4 rounded ${stylesVariant} ${bold && 'font-bold'}`
	return (
		<button
			className={`${style}`}
			{...rest}
		>
			{children}
		</button>
	)
}
