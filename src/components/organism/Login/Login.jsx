import React, { useContext } from 'react'
import { FormLogin } from '../../molecules/FormLogin/FormLogin'
import { AuthContextFirebase } from '../../../context/AuthContextFirebase';
import { useNavigate } from 'react-router-dom';
// import { authLogin } from '../../../service/auth'

export const Login = () => {
	const navigate = useNavigate()
	const { login } = useContext(AuthContextFirebase);

	const onSubmit = async (value) => {
		await login(value)
		navigate('/')
	}

	return (
		<FormLogin onSubmit={onSubmit} />
	)
}
