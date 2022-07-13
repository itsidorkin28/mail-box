import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.scss'
import reportWebVitals from './reportWebVitals'
import MainProvider from './providers/MainProvider'
import { Route, Routes } from 'react-router-dom'
import Inbox from './components/screens/Inbox/Inbox'
import Sent from './components/screens/Sent/Sent'
import Trash from './components/screens/Trash/Trash'
import Spam from './components/screens/Spam/Spam'
import Drafts from './components/screens/Drafts/Drafts'
import NotFound from './components/screens/NotFound/NotFound'
import Custom from './components/screens/Custom/Custom'

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
)
root.render(
	<React.StrictMode>
		<MainProvider>
			<Routes>
				<Route path='/' element={<Inbox />} />
				<Route path='/inbox' element={<Inbox />} />
				<Route path='/sent' element={<Sent />} />
				<Route path='/trash' element={<Trash />} />
				<Route path='/spam' element={<Spam />} />
				<Route path='/drafts' element={<Drafts />} />
				<Route path='/custom/:customId' element={<Custom />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</MainProvider>
	</React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
