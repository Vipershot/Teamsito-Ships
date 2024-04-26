import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const login = ({ user, token }) => {
		// Implementa la lógica de inicio de sesión aquí 
		setUser({
			user,
			token
		});
		localStorage.setItem('token', token)
	};

	const logout = () => {
		// Implementa la lógica de cierre de sesión aquí
		setUser(null);
		localStorage.removeItem("token");
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};