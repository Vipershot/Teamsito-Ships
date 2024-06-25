export const initialState = {
	playas: [],

};

export const beachesReducer = (state, action) => {
	switch (action.type) {
		// Handle different action types

		case 'GET_BEACHES':
			return {
				...state,
				playas: action.payload
			}

		case 'GET_USERS':
			return {
				...state,
				users: action.payload
			}

		default:
			return {
				...state,
				playas: [],
				users: []
			}
	}
};
