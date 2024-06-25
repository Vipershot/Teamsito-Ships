import React from 'react'
import { Ships } from '../organism'
import { Typography } from '@mui/material'
import { AppButton } from '../atoms/AppButton/AppButton'
import { useNavigate } from 'react-router-dom'

export const TemplateShips = () => {
	const navigate = useNavigate()
	return (
		<>
			<div className='flex justify-between items-center'>
				<div className='mb-5'>
					<Typography variant='h4' className='text-gray-700'>Barcos</Typography>
					<Typography variant='p' className='text-gray-700'>Listado de barcos con informacion detallado.</Typography>
				</div>
				<AppButton onClick={() => navigate('/ships/create')}>
					Crear Barco
				</AppButton>
			</div>
			<Ships />
		</>
	)
}
