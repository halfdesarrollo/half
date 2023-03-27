import { configureStore, combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

//Slices
import user from './slices/user/userSlice'

const rootReducer = combineReducers({
  userState: user,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['sessionState'],
}

const persistReducers = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistReducers,
  middleware: [thunk],
})

export default store
