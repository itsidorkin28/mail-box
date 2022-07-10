import React from 'react'
import styles from './Menu.module.scss'
import { MenuItem } from './MenuItem'
import { IMenu } from './menu.interface'

export const Menu = ({ title, items }: IMenu): JSX.Element => {
	return <div className={styles.menu}>
		<div className={styles.heading}>
			{title}
		</div>
		<nav>
			<ul className={styles.ul}>
				{items.map(item => {
					return <MenuItem key={item.link}
					                 title={item.title}
					                 link={item.link}
					                 icon={item.icon}
					/>
				})}
			</ul>
		</nav>
	</div>
}



