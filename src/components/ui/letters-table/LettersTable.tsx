import React, { FC } from 'react'
import { ITableItem } from './letters-table.interface'
import LettersTableHeader from './LettersTableHeader'
import LettersTableItem from './LettersTableItem'
import styles from './LettersTable.module.scss'
import ModalWindow from '../modal-window/ModalWindow'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import CategoryCreate from '../category-create/CategoryCreate'

interface ILettersTable {
	tableItems: ITableItem[]
	headerItems: string[]
	category: string
}

const LettersTable: FC<ILettersTable> = React.memo(({ tableItems, headerItems, category }) => {
	const filteredTableItems = tableItems.filter(item => item.category === category)
	const modalActive = useTypedSelector(state => state.modal.modalActive)

	const lettersCounter = filteredTableItems.length
	return (
		<div>
			<span>Letters counter: {lettersCounter}</span>
			<LettersTableHeader headerItems={headerItems} />
			{filteredTableItems.length ? filteredTableItems.map(tableItem => {
				return <LettersTableItem key={tableItem._id} tableItem={tableItem} />
			}) : <div className={styles.notFound}>Letters not found</div>}
			<ModalWindow active={modalActive}>
				<CategoryCreate />
			</ModalWindow>
		</div>
	)
})

export default LettersTable
