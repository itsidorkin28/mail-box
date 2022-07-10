import React, { FC } from 'react'
import { LayoutProps } from './Layout.props'
import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>
				{children}
			</div>
		</div>
	)
}

export default Layout
