import React, { useContext } from 'react'
import { AppButton } from '../../atoms/AppButton/AppButton'
import Icon from '../../../../public/shipIcon.png'
import IconShipWhite from '../../../../public/shipIconWhite.png'
import LogoPlaya from '../../../../public/LogoPlaya.png'

import { menuList } from '../../../utils/menuList'
import { useNavigate, useLocation } from 'react-router-dom'
import { AuthContextFirebase } from '../../../context/AuthContextFirebase'

export const Sidebar = () => {
	const { logout } = useContext(AuthContextFirebase);
	const location = useLocation();
	const navigate = useNavigate()

	return (
		<div className='h-screen border w-52 p-5 flex flex-col justify-between'>
			<div>
				<div className='mb-5 border-b-2 pb-4'>
					<img src={LogoPlaya} />
				</div>
				<div className='flex flex-col gap-2'>

					{menuList.map(item => <AppButton key={item.label} bold={location.pathname == item.path && true} onClick={() => navigate(item.path)} variant={location.pathname == item.path ? 'primary' : 'ghost'}>
						<img src={location.pathname == item.path ? item.iconLight : item.iconOff} />  {item.label}
					</AppButton>)}
				</div>
			</div>
			<div className='flex flex-col'>
				<AppButton variant='ghost' onClick={() => {
					logout()
					navigate('/auth/login')
				}}>
					<img src={Icon} />  Cerrar Sesion
				</AppButton>
			</div>
		</div>
	)
}
