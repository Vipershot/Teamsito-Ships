import React from 'react'
import { FormLogin } from '../organism/FormLogin/FormLogin'
import { Login } from '../organism/Login/Login'
import { AppText } from '../atoms/AppText/AppText'
import { AppButton } from '../atoms/AppButton/AppButton'
import { useNavigate } from 'react-router-dom'

export const TemplateLogin = () => {
    const navigate = useNavigate()
    return (
        <section className='w-full h-screen flex justify-center items-center border'>
            <div className='flex flex-col container'>
                <div className=' w-100 mb-5'>
                    <AppText text={'Login'} variant={'h1'} bold />
                </div>
                <Login />
                <div className=' w-100 mt-5 flex justify-center'>
                    <AppButton variant='ghost' onClick={() => navigate('/auth/register')}>
                        Registrar
                    </AppButton>
                </div>

            </div>
        </section>
    )
}
