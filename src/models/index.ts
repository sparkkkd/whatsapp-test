export interface IChat {
	chatId: string
	textMessage: string
	idMessage: string
	type: string
	timestamp: number
}

interface IInstances {
	chatId: string
	idInstance: string
	apiTokenInstance: string
}

export interface IPayloadInstances {
	payload: IInstances
}

export interface IStateInstance {
	stateInstance: string
}
