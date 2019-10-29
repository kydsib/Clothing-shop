const INITAIAL_STATE = {
	currentUser: null
}

const userReducer = (state = INITAIAL_STATE, action) => {
	switch (action.type) {
		case 'SET_CURRENT_SER':
			return {
				...state,
				currentUser: action.payload
			}

		default:
			return state
	}
}

export default userReducer
