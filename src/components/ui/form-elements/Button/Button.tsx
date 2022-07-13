import React from 'react'
import styles from '../Form.module.scss'
import cn from 'classnames'
import { IButton } from './button.interface'

const Button = ({children, className, ...props}: IButton): JSX.Element => {
	return (
		<button className={cn(styles.button, className)} {...props}>
			{children}
		</button>
	)
}

export default Button
