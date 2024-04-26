import { authAxios } from '../utils/axiosCreate'

export const authLogin = async (value) => {
	try {
		const { data } = await authAxios.post('/login', value)
		return data.data
	} catch (error) {
		console.log('ERROR LOGIN ', error)
	}
}