import { requests } from '../utils/axiosCreate'

export const getShips = async () => {
	const { data } = await requests.get('api/ship')
	return data
}