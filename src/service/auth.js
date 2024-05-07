import { authAxios } from '../utils/axiosCreate'

export const authLogin = async (value) => {
	try {
		const { data } = await authAxios.post('/auth/login', value)
		return data.data
	} catch (error) {
		console.log('ERROR LOGIN ', error)
	}
}

export const authRegister = async (value) => {
	try {
		const { data } = await authAxios.post('/userShip/register', value)
		return data.data
	} catch (error) {
		console.log('ERROR LOGIN ', error)
	}
}