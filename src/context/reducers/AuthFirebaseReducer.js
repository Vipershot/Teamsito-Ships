export const initialState = {
	user: '',
	token: '',
	status: ''
};

export const authReducer = (state, action) => {
	switch (action.type) {
		// Handle different action types

		case 'LOGIN_SUCCESS':
			return {
				...state,
				user: action.payload.user,
				token: action.payload.user.accessToken,
				status: 'authenticate'
			}
		case 'LOGOUT':
			return {
				...state,
				token: null,
				status: 'not-authenticate'
			}

		case 'REFRESH':
			if (action.payload) {
				return {
					...state,
					user: action.payload.auth.currentUser,
					token: action.payload.accessToken,
					status: 'authenticate'
				}
			}
		default:
			return {
				...state,
				token: null,
				user: null,
				status: 'not-authenticate'
			}
	}
};
