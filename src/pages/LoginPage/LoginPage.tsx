import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../store/hooks'
import { saveInstances } from '../../store/slices/chatSlice'

import axios from 'axios'

import { IStateInstance } from '../../models'

import { TextInput } from '@gravity-ui/uikit'
import { Button } from '@gravity-ui/uikit'

import styles from './LoginPage.module.sass'

export const LoginPage = () => {
	const navigate = useNavigate()

	const [idInstance, setIdInstance] = useState<string>('')
	const [apiTokenInstance, setApiTokenInstance] = useState<string>('')
	const [phoneNumber, setPhoneNumber] = useState<string>('')

	const [errorMessage, setErrorMessage] = useState<string>('')

	const dispatch = useAppDispatch()

	const onHandleButton = async () => {
		try {
			const response = await axios.get<IStateInstance>(
				`https://1103.api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`,
				{ withCredentials: false }
			)

			if (response.data.stateInstance === 'authorized') {
				dispatch(
					saveInstances({
						idInstance,
						apiTokenInstance,
						chatId: phoneNumber,
					})
				)

				localStorage.setItem('idInstance', idInstance)
				localStorage.setItem('apiTokenInstance', apiTokenInstance)
				localStorage.setItem('chatId', phoneNumber)

				navigate('/chat')
			}
		} catch (error) {
			setErrorMessage('Видимо какой-то Instance неверен :( Проверьте и попробуйте еще раз')
		}
	}

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>
				Добро пожаловать в <span className={styles.green}>WhatsApp</span>
			</h1>

			<div className={styles.inputGroup}>
				<TextInput
					className={styles.input}
					placeholder='Введите ваш Id Instance'
					size='l'
					errorMessage='Error'
					value={idInstance}
					onChange={(e) => setIdInstance(e.target.value)}
				/>
				<TextInput
					className={styles.input}
					placeholder='Введите ваш Api token Instance'
					size='l'
					errorMessage='Error'
					value={apiTokenInstance}
					onChange={(e) => setApiTokenInstance(e.target.value)}
				/>
				<TextInput
					className={styles.input}
					placeholder='Введите номер телефона получателя'
					size='l'
					errorMessage='Error'
					value={phoneNumber}
					onChange={(e) => setPhoneNumber(e.target.value)}
				/>
				{errorMessage && <div className={styles.error}>{errorMessage}</div>}
				<Button onClick={onHandleButton} view='action'>
					<span className={styles.buttonText}>Написать сообщение</span>
				</Button>
			</div>
		</div>
	)
}
