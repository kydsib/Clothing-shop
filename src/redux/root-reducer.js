import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // actual loacalStorage object, redux persist is using LS as default storage

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

const persistConfig = {
	key: 'root', // telling at witch point of reducer to start storing values
	storage,
	whitelist: ['cart'] // only persisting cart because user is handled by firebase
}

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer)
