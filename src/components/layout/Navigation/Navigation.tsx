import React from 'react'
import styles from './Navigation.module.scss'
import { MenuContainer } from './MenuContainer/MenuContainer'

const Navigation = () => {
	return (
		<div className={styles.navigation}>
			<MenuContainer/>
		</div>
	)
}

export default Navigation
