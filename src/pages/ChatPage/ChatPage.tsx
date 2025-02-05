import { ChatActionBar } from '../../modules/ChatActionBar/ChatActionBar'
import { ChatMessagesBlock } from '../../modules/ChatMessagesBlock/ChatMessagesBlock'

import chatBackground from '../../assets/bg.png'

import styles from './ChatPage.module.sass'

export const ChatPage = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container} style={{ backgroundImage: `url(${chatBackground})` }}>
				<ChatMessagesBlock />
				<ChatActionBar />
			</div>
		</div>
	)
}
