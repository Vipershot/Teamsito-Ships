import React, { createContext, useEffect, useReducer } from 'react'
import { beachesReducer, initialState } from './reducers/BeachesReducer'
export const BeachesContext = createContext()
import { loadBeaches } from '../service/beachesServices'
import { loadUsers } from '../service/shipsService'
export const BeachesProvider = ({ children }) => {
	const [state, dispatch] = useReducer(beachesReducer, initialState)

	const getBeaches = async () => {
		try {
			const beaches = await loadBeaches()
			dispatch({
				type: 'GET_BEACHES',
				payload: beaches
			})
		} catch (e) {
			console.error("Error loading beaches ", e);
		}
	}

	const getUsers = async () => {
		try {
			const users = await loadUsers()
			dispatch({
				type: 'GET_USERS',
				payload: users
			})
		} catch (error) {
			console.error("Error loading users ", e);
		}
	}

	useEffect(() => {
		getUsers()
		getBeaches()
	}, []);

	return (
		<BeachesContext.Provider value={{ ...state, getBeaches }}>
			{children}
		</BeachesContext.Provider>
	)
}
