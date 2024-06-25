import React, { createContext, useEffect, useReducer } from 'react'
import { useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { authReducer, initialState } from './reducers/AuthFirebaseReducer'
export const AuthContextFirebase = createContext()

export const AuthProviderFirebase = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, initialState)
	const signUp = async (data) => createUserWithEmailAndPassword(auth, data.email, data.password)
	const login = async (data) => {
		const res = await signInWithEmailAndPassword(auth, data.email, data.password)
		dispatch({
			type: 'LOGIN_SUCCESS',
			payload: res
		})
	}
	const logout = async () => {
		const res = await signOut(auth)
		dispatch({
			type: 'LOGOUT',
			payload: res
		})
	}

	useEffect(() => {
		onAuthStateChanged(auth, currentUser => {
			dispatch({
				type: 'REFRESH',
				payload: currentUser
			})
		})
	}, []);

	return (
		<AuthContextFirebase.Provider value={{ ...state, signUp, login, logout }}>
			{children}
		</AuthContextFirebase.Provider>
	)
}
