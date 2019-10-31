import React from 'react'
import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'
import { addItem } from '../../redux/cart/cart.actions'

import './collection-item.styles.scss'

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					background: `url(${imageUrl})`
				}}
			/>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<CustomButton onClick={() => addItem(item)} inverted>
				{' '}
				Add to cart{' '}
			</CustomButton>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
	// recievs item as a prop, pass item to addItem action creator, then we are dispaching new object to the store
})

export default connect(
	null,
	mapDispatchToProps
)(CollectionItem)
