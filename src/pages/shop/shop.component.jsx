import React from 'react'
import { Route } from 'react-router-dom'

import CollectionOverview from '../../componnets/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'

const ShopPage = ({ match }) => {
	return (
		// shop in app component is nested in Route so we can use match
		<div className="shop-page">
			<Route exact path={match.path} component={CollectionOverview} />
			<Route
				path={`${match.path}/:collectionId`}
				component={CollectionPage}
			/>
		</div>
	)
}

export default ShopPage
