import { useState } from 'react'

import axios from 'axios'

import { Button, TextArea } from '@gravity-ui/uikit'
import { CaretRight } from '@gravity-ui/icons'

import styles from './ChatActionBar.module.sass'

export const ChatActionBar = () => {
	const [newMessage, setNewMessage] = useState<string>('')

	const idInstance = localStorage.getItem('idInstance')
	const apiTokenInstance = localStorage.getItem('apiTokenInstance')
	const chatId = localStorage.getItem('chatId')

	const sendMessage = async () => {
		try {
			await axios
				.post(
					`https://1103.api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
					{
						chatId: `${chatId}@c.us`,
						message: newMessage,
					},
					{
						withCredentials: false,
					}
				)
				.then(() => setNewMessage(''))
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className={styles.actionBar}>
			<TextArea
				className={styles.input}
				size='xl'
				placeholder='Введите сообщение...'
				value={newMessage}
				onChange={(e) => setNewMessage(e.target.value)}
			/>
			<Button onClick={sendMessage} className={styles.button} size='xl'>
				<CaretRight className={styles.enterIcon} />
			</Button>
		</div>
	)
}
