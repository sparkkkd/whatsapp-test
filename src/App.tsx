import './App.sass'
import { Route, Routes, useLocation } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { Container } from './components/Container/Container'
import { ThemeProvider } from '@gravity-ui/uikit'
import { ChatPage } from './pages/ChatPage/ChatPage'

function App() {
	const location = useLocation()

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
