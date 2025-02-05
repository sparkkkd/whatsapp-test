import { useEffect, useState } from 'react'

import axios from 'axios'
import clsx from 'clsx'
import moment from 'moment'

import { IChat } from '../../models'

import styles from './ChatMessagesBlock.module.sass'

export const ChatMessagesBlock = () => {
	const [messages, setMessages] = useState<IChat[]>([])

	const idInstance = localStorage.getItem('idInstance')
	const apiTokenInstance = localStorage.getItem('apiTokenInstance')
	const chatId = localStorage.getItem('chatId')

	const getChatHistory = async () => {
		try {
			return await axios.post(
				`https://1103.api.green-api.com/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`,
				{ chatId: `${chatId}@c.us` },
				{
					withCredentials: false,
				}
			)
		} catch (error) {
			console.log(error)
		}
	}

	const receiveNotification = async () => {
		try {
			return await axios
				.get(
					`https://1103.api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}?receiveTimeout=5`
				)
				.then((res) => {
					if (res.data) {
						getChatHistory().then((res) => setMessages(res?.data))
						axios.delete(
							`https://1103.api.green-api.com/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${res.data.receiptId}`
						)
					}
				})
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		getChatHistory().then((res) => setMessages(res?.data))

		const timer = setInterval(() => receiveNotification(), 5000)

		return () => {
			clearInterval(timer)
		}
	}, [])

	return (
		<ul className={styles.messagesContainer}>
			{messages &&
				messages.reverse().map((item) => (
					<li
						className={clsx(
							styles.message,
							item.type === 'outgoing' ? styles.outgoing : styles.incoming
						)}
						key={item.idMessage}
					>
						<div className={styles.messageBody}>{item?.textMessage}</div>
						<div className={styles.timestamp}>{moment.unix(item.timestamp).format('HH:mm')}</div>
					</li>
				))}
		</ul>
	)
}
