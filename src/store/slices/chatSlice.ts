import { createSlice } from '@reduxjs/toolkit'
import { IPayloadInstances } from '../../models'

interface InitialStateType {
	chatId: string
	idInstance: string
	apiTokenInstance: string
}

const initialState: InitialStateType = {
	chatId: '',
	idInstance: '',
	apiTokenInstance: '',
}

export const chatApi = createSlice({
	name: 'chatApi',
	reducers: {
		saveInstances: (state, action: IPayloadInstances) => {
			state.idInstance = action.payload.idInstance
			state.apiTokenInstance = action.payload.apiTokenInstance
			state.chatId = action.payload.chatId
		},
	},
	initialState,
})

export default chatApi.reducer

export const { saveInstances } = chatApi.actions
