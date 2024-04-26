import React from 'react'

export const AppInput = ({ onChange, ...rest }) => {
	return (
		<input
			className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-blue-400 dark:focus:ring-blue-400"
			{...rest} onChange={onChange}
		/>
	)
}
