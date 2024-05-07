import React, { createContext, useState } from 'react';
import { authLogin } from '../service/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [apiToken, setApiToken] = useState('')
	const login = async ({ user, token }) => {
		try {
			const tokenReceived = token || getToken(user)
			// const userReceived = await getUserByToken(tokenReceived)
			// Implementa la lógica de inicio de sesión aquí 
			setUser({
				user,
				token
			});
			setApiToken(tokenReceived)
			localStorage.setItem('token', tokenReceived)

		} catch (error) {

		}
	};

	const logout = () => {
		// Implementa la lógica de cierre de sesión aquí
		setUser(null);
		localStorage.removeItem("token");
	};

	const getToken = async (user) => {
		const { token } = await authLogin(user)
		return `Bearer ${token}`
	}
	const getUserByToken = async (token) =>
		await getUserByTokenService(token)


	return (
		<AuthContext.Provider value={{ user, login, logout, apiToken }}>
			{children}
		</AuthContext.Provider>
	);
};