import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectCollections = createSelector(
	[selectShop],
	shop => shop.collections
)

// changed shop data from arr to obj. Collection-overview uses arr so we convert obj to arr and using it in collections-overview
export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam =>
	createSelector(
		[selectCollections],
		collections => collections[collectionUrlParam]
	)
