import React, { useState } from 'react'
import { AppInput } from '../../atoms/AppInput/AppInput'
import { AppButton } from '../../atoms/AppButton/AppButton'
import { AppText } from '../../atoms/AppText/AppText'
import { FormGroup } from '../../atoms/FormGroup/FormGroup'

export const FormLogin = ({ onSubmit }) => {
	const [data, setData] = useState()
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
				<AppInput onChange={handleInput} name='email' placeholder='Email' />
				<AppInput onChange={handleInput} name='password' placeholder='Password' />
				<div className='flex justify-center'>
					<AppButton>Iniciar Sesion</AppButton>
				</div>
			</FormGroup>
		</form>
	)
}
