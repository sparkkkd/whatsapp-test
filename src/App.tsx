import { useEffect } from 'react'

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { ThemeProvider } from '@gravity-ui/uikit'

import { useAppDispatch } from './store/hooks'
import { saveInstances } from './store/slices/chatSlice'

import { Container } from './components/Container/Container'

import { LoginPage } from './pages/LoginPage/LoginPage'
import { ChatPage } from './pages/ChatPage/ChatPage'

import './App.sass'

function App() {
	const location = useLocation()
	const navigate = useNavigate()

	const dispatch = useAppDispatch()

	useEffect(() => {
		if (
			localStorage.getItem('idInstance') &&
			localStorage.getItem('apiTokenInstance') &&
			localStorage.getItem('chatId')
		) {
			dispatch(
				saveInstances({
					idInstance: localStorage.getItem('idInstance') as string,
					apiTokenInstance: localStorage.getItem('apiTokenInstance') as string,
					chatId: localStorage.getItem('chatId') as string,
				})
			)
			navigate('/chat')
		}
	}, [])

	return (
		<ThemeProvider theme='dark'>
			<Container>
				<Routes location={location.pathname}>
					<Route path='/' element={<LoginPage />} />
					<Route path='/chat' element={<ChatPage />} />
				</Routes>
			</Container>
		</ThemeProvider>
	)
}

export default App
