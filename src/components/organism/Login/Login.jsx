import React, { useContext } from 'react'
import { FormLogin } from '../../molecules/FormLogin/FormLogin'
import { authLogin } from '../../../service/auth'
import { AuthContext } from '../../../context/authContext'

export const Login = () => {

	const { login } = useContext(AuthContext)

	const onSubmit = async (value) => {
		const data = await authLogin(value)
		login(data)
	}
	return (
		<FormLogin onSubmit={onSubmit} />
	)
}
