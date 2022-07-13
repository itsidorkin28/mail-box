import React, { FC, ReactNode } from 'react'
import styles from './ModalWindow.module.scss'
import { useActions } from '../../../hooks/useActions'
import cn from 'classnames'

type ModalWindowType = {
	active: boolean
	children: ReactNode
}

const ModalWindow: FC<ModalWindowType> = React.memo(({ active, children }): JSX.Element => {
	const { setModalActive } = useActions()

	const setActiveModalWindow = () => {
		setModalActive({ active: false })
	}

	return (
		<div className={cn(styles.modal, {
			[styles.active]: active,
		})} onClick={setActiveModalWindow}>
			<div className={styles.content} onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
})


export default ModalWindow
