import { combineReducers, configureStore } from '@reduxjs/toolkit'
import chatApi from './slices/chatSlice'

export const rootReducer = combineReducers({
	chatApi,
})

export const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
