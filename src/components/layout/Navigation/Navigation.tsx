import React from 'react'
import styles from './Navigation.module.scss'
import { CategoryContainer } from './CategoryContainer/CategoryContainer'

const Navigation = () => {
	return (
		<div className={styles.navigation}>
			<CategoryContainer/>
		</div>
	)
}

export default Navigation
