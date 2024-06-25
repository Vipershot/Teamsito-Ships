import React, { useContext, useEffect, useState } from 'react'
import { BeachesContext } from '../../context/BeachesContext';
export const UsersView = () => {
	const { users } = useContext(BeachesContext);
	useEffect(() => {
		console.log(users)
	}, []);

	return (
		<div>{
			users.map(data => <h1 key={data.email}>{data.email}</h1>)
		}</div>
	)
}
