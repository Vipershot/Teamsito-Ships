import React, { useContext } from 'react'
import { FormRegister } from '../../molecules/FormRegister/FormRegister'
import { authRegister } from '../../../service/auth'
import { AuthContext } from '../../../context/authContext'
export const Register = () => {
	const { login } = useContext(AuthContext)

	const onSubmit = async (value) => {
		const data = await authRegister(value)
		login(data)

	}
	return (
		<div>
			<FormRegister onSubmit={onSubmit} />
		</div>
	)
}
