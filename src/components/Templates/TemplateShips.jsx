import React from 'react'
import { Ships } from '../organism'
import { Typography } from '@mui/material'

export const TemplateShips = () => {
	return (
		<>
			<div className='mb-5'>
				<Typography variant='h4' className='text-gray-700'>Barcos</Typography>
				<Typography variant='p' className='text-gray-700'>Listado de barcos con informacion detallado.</Typography>
			</div>
			<Ships />
		</>
	)
}
