import { FC } from 'react'
import styles from './LettersTable.module.scss'
import cn from 'classnames'

const LettersTableHeader: FC<{ headerItems: string[] }> = ({ headerItems }) => {
	return (
		<div className={cn(styles.item, styles.itemHeader)}>
			{headerItems.map(value => <div key={value}>{value}</div>)}
			<div>Actions</div>
		</div>
	)
}

export default LettersTableHeader
