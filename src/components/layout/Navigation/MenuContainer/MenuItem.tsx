import React from 'react'
import styles from './Menu.module.scss'
import cn from 'classnames'
import { IMenuItem } from './menu.interface'
import { NavLink } from 'react-router-dom'
import { MaterialIcon } from '../../../ui/MaterialIcon'
import { useLocation } from 'react-router-dom'


export const MenuItem = ({ icon, title, link }: IMenuItem): JSX.Element => {
	const location = useLocation()
	return <li className={cn({
		[styles.active]: location.pathname === link,
	})}>
		<NavLink to={link}>
				<MaterialIcon name={icon} />
				<span>{title}</span>
		</NavLink>
	</li>
}



