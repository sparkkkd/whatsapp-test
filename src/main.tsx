import './index.sass'
import App from './App.tsx'

import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

import '@gravity-ui/uikit/styles/fonts.css'
import '@gravity-ui/uikit/styles/styles.css'
import './theme.css'

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<BrowserRouter basename='/'>
			<App />
		</BrowserRouter>
	</Provider>
)
