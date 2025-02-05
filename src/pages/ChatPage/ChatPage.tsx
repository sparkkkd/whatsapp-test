import { useAppDispatch } from '../../store/hooks'
import { saveInstances } from '../../store/slices/chatSlice'

import { ChatActionBar } from '../../modules/ChatActionBar/ChatActionBar'
import { ChatMessagesBlock } from '../../modules/ChatMessagesBlock/ChatMessagesBlock'

import { ArrowRightFromSquare } from '@gravity-ui/icons'

import chatBackground from '../../assets/bg.png'

import styles from './ChatPage.module.sass'
import { useNavigate } from 'react-router-dom'

export const ChatPage = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const logout = () => {
		localStorage.removeItem('idInstance')
		localStorage.removeItem('apiTokenInstance')
		localStorage.removeItem('chatId')

		dispatch(saveInstances({ idInstance: '', apiTokenInstance: '', chatId: '' }))

		navigate('/')
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.container} style={{ backgroundImage: `url(${chatBackground})` }}>
				<div className={styles.logout} onClick={logout}>
					<ArrowRightFromSquare />
					<div>Выйти</div>
				</div>
				<ChatMessagesBlock />
				<ChatActionBar />
			</div>
		</div>
	)
}
