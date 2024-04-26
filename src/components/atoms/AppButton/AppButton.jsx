import React from 'react'

export const AppButton = ({ children, variant = 'primary', ...rest }) => {
	const stylesVariant = `${variant === 'ghost' && 'font-bold'} ${variant === 'primary' && 'bg-gray-700 text-white border'} `

	const style = `flex items-center py-2 px-4 rounded ${stylesVariant}`
	return (
		<button
			className={`${style}`}
			{...rest}
		>
			{children}
		</button>
	)
}
