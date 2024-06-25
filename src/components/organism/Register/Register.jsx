import React, { useContext } from 'react'
import { FormRegister } from '../../molecules/FormRegister/FormRegister'
import { AuthContextFirebase } from '../../../context/AuthContextFirebase'
import Swal from 'sweetalert2'
import { createUser } from '../../../service/auth'

export const Register = () => {
	const { signUp } = useContext(AuthContextFirebase);
	const onSubmit = async (value) => {
		// try {
		await signUp(value)
		await createUser(value)
		// } catch (error) {
		// 	console.log(error)
		// 	Swal.fire({
		// 		title: 'Error al registrar',
		// 		text: error,
		// 		icon: 'error',
		// 		confirmButtonText: 'Cool'
		// 	})
		// }
	}
	return (
		<div>
			<FormRegister onSubmit={onSubmit} />
		</div>
	)
}
