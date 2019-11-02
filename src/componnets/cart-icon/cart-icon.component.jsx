import React from 'react'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">{itemCount}</span>
	</div>
)

// const mapStateToProps = ({ cart: { cartItems } }) => ({
// 	// this data gets render every time any action happens, to avaid unnecessary rerender when count is same
// 	// we gona use Memoization - https://en.wikipedia.org/wiki/Memoization
// 	// using reselect lib for this. Moving this part to cart.selectors.js
// 	itemCount: cartItems.reduce(
// 		(accumulatedQuantity, cartItem) =>
// 			accumulatedQuantity + cartItem.quantity,
// 		0
// 	)
// })

const mapStateToProps = state => ({
	itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CartIcon)
