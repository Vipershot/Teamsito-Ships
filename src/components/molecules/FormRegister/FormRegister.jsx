import React, { useContext, useState } from 'react'
import { AppInput } from '../../atoms/AppInput/AppInput'
import { AppButton } from '../../atoms/AppButton/AppButton'
import { FormGroup } from '../../atoms/FormGroup/FormGroup'

export const FormRegister = ({ onSubmit }) => {
	const [data, setData] = useState({ role: ['admin'] })
	const handleInput = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		})
	}
	return (
		<form onSubmit={(e) => {
			e.preventDefault()
			onSubmit(data)
		}}>
			<FormGroup>
				<AppInput placeholder='Nombre' type='text' onChange={handleInput} name='firstName' />
				<AppInput placeholder='Apellido' type='text' onChange={handleInput} name='lastName' />
				<AppInput placeholder='Email' type='email' onChange={handleInput} name='email' />
				<AppInput placeholder='Password' type='password' onChange={handleInput} name='password' />

				<div className='flex justify-center'>
					<AppButton>Crear usuario</AppButton>
				</div>
			</FormGroup>
		</form>
	)
}
