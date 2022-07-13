import React, { FC } from 'react'
import { ILettersTableItem, ITableItem } from './letters-table.interface'
import styles from './LettersTable.module.scss'
import LettersActions from './LetterActions/LettersActions'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

const LettersTableItem: FC<ILettersTableItem> = ({ tableItem }) => {

	const currentDragCategory = useTypedSelector(state => state.drag.currentDragCategory)
	const { setCategory, setCurrentDragCategory } = useActions()

	function dragStartHandler(e: React.DragEvent<HTMLDivElement>) {

	}

	function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {

	}

	function dragEndHandler(e: React.DragEvent<HTMLDivElement>, letter: ITableItem) {
		if (currentDragCategory === '') return
		setCategory({ _id: letter._id, category: currentDragCategory })
		setCurrentDragCategory({category: ''})
	}

	function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
		e.preventDefault()
	}

	function dropHandler(e: React.DragEvent<HTMLDivElement>) {
		e.preventDefault()
	}

	return (
		<div className={styles.item}
		     draggable={true}
		     onDragStart={(e) => dragStartHandler(e)}
		     onDragLeave={(e) => dragLeaveHandler(e)}
		     onDragEnd={(e) => dragEndHandler(e, tableItem)}
		     onDragOver={(e) => dragOverHandler(e)}
		     onDrop={(e) => dropHandler(e)}
		>
			<div>{tableItem.items.author}</div>
			<div>{tableItem.items.preview}</div>
			<div>{tableItem.items.date}</div>
			<LettersActions _id={tableItem._id} category={tableItem.category} />
		</div>
	)
}

export default LettersTableItem
