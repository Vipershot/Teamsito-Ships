import React from 'react'
import { Register } from '../organism/Register/Register'
import { AppText } from '../atoms/AppText/AppText'
import { AppButton } from '../atoms/AppButton/AppButton'
import { useNavigate } from 'react-router-dom'

export const TemplateRegister = () => {
	const navigate = useNavigate()
	return (
		<>

			<section className='w-full h-screen flex justify-center items-center border'>
				<div className='flex flex-col container'>
					<div className=' w-100 mb-5'>
						<AppText text={'Crear Usuario'} variant={'h1'} bold />
					</div>
					<Register />
					<div className=' w-100 mt-5 flex justify-center'>
						<AppButton variant='ghost' onClick={() => navigate('/auth/login')}>

							Iniciar Sesion
						</AppButton>
					</div>

				</div>
			</section>


		</>
	)
}
