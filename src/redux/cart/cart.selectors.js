import { createSelector } from 'reselect'

const selectCart = state => state.cart
// input selector

export const selectCartItems = createSelector(
	// because of createSelector it's memoized (cached)
	[selectCart],
	cart => cart.cartItems
	// returns the value we want out of selector (cart.itms)
)

export const selectCartHidden = createSelector(
	[selectCart],
	cart => cart.hidden
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

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
	cartItems.reduce(
		(accumulatedQuantity, cartItem) =>
			accumulatedQuantity + cartItem.quantity * cartItem.price,
		0
	)
)
