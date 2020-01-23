import { createSelector } from 'reselect'

const selectCart = state => state.cart
// Ar store yra cart objektas?
// taking part of state that we need - cart

export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
	// Kas cia vyksta??
)

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems =>
		cartItems.reduce(
			(accumulatedQuantity, cartItem) =>
				accumulatedQuantity + cartItem.quantity,
			0
		)
)
