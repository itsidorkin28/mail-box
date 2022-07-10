import React, { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { BrowserRouter } from 'react-router-dom'
import Layout from '../components/layout/Layout'

export type MainProviderType = {
	children: ReactNode
}

const MainProvider: FC<MainProviderType> = ({children}): JSX.Element => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Layout>
					{children}
				</Layout>
			</BrowserRouter>
		</Provider>
	)
}

export default MainProvider
