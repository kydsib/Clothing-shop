import React from 'react'
import { connect } from 'react-redux'

import {
	clearItemFromCart,
	addItem,
	reduceItemByOne
} from '../../redux/cart/cart.actions'

import './checkout-item.styles.scss'

const CheckoutItem = ({
	// cartItem: { name, imageUrl, price, quantity }, cant use it like this, because I wont have acces to cartItem
	cartItem,
	deleteItem,
	addOne,
	removeItem
}) => {
	const { name, imageUrl, price, quantity } = cartItem
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => removeItem(cartItem)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addOne(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<div className="remove-button" onClick={() => deleteItem(cartItem)}>
				&#10005;
			</div>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	deleteItem: item => dispatch(clearItemFromCart(item)),
	addOne: item => dispatch(addItem(item)),
	removeItem: item => dispatch(reduceItemByOne(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
