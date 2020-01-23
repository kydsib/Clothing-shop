import CartActionTypes from './cart.types'

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
	// function that gets item and generate new action w/ type and payload = item
	type: CartActionTypes.ADD_ITEM,
	payload: item
})
