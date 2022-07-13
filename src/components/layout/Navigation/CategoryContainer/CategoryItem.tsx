import React, { useCallback } from 'react'
import styles from './Category.module.scss'
import cn from 'classnames'
import { ICategoryItem } from './category.interface'
import { NavLink, useNavigate } from 'react-router-dom'
import { MaterialIcon } from '../../../ui/MaterialIcon'
import { useLocation } from 'react-router-dom'
import { useActions } from '../../../../hooks/useActions'
import { toastr } from 'react-redux-toastr'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { EditableSpan } from '../../../ui/editable-span/EditableSpan'

export const CategoryItem = React.memo(({ _id, icon, title, link, category }: ICategoryItem): JSX.Element => {
	const location = useLocation()
	const navigate = useNavigate()


	const counterTableItems = useTypedSelector(state => state.letters)
		.filter(item => item.category === category)
		.length

	const { setCurrentDragCategory, deleteCategory, updateCategory } = useActions()


	function dragStartHandler(e: React.DragEvent<HTMLLIElement>) {
	}

	function dragOverHandler(e: React.DragEvent<HTMLLIElement>) {
		e.preventDefault()
		if (e.currentTarget.className === styles.link) {
			e.currentTarget.style.boxShadow = '0 2px 3px gray'
		}
	}

	function dragLeaveHandler(e: React.DragEvent<HTMLLIElement>) {
		if (e.currentTarget.className === styles.link) {
			e.currentTarget.style.boxShadow = 'none'
		}
	}

	function dragEndHandler(e: React.DragEvent<HTMLLIElement>) {
		if (e.currentTarget.className === styles.link) {
			e.currentTarget.style.boxShadow = 'none'
		}
	}

	function dropHandler(e: React.DragEvent<HTMLLIElement>, title: string) {
		e.preventDefault()
		setCurrentDragCategory({ category: title.toLowerCase() })
		e.currentTarget.style.boxShadow = 'none'
	}

	const onDeleteCategory = useCallback(() => {
		if (counterTableItems === 0) {
			deleteCategory({ category })
			navigate('/inbox', { replace: true })
			toastr.success(`Delete category`, `Deleted successfully`)
		} else {
			toastr.error(`Delete category`, `There are letters in the category`)
		}
	}, [counterTableItems, deleteCategory, navigate, category])

	const changeTitle = useCallback((newTitle: string) => {
		updateCategory({ _id, newTitle })
	}, [_id, updateCategory])

	return <li className={cn(styles.link, {
		[styles.active]: location.pathname === link,
	})}
	           onDragStart={(e) => dragStartHandler(e)}
	           onDrop={(e) => dropHandler(e, title)}
	           onDragOver={(e) => dragOverHandler(e)}
	           onDragLeave={(e) => dragLeaveHandler(e)}
	           onDragEnd={(e) => dragEndHandler(e)}>
		<NavLink to={link}>
			<MaterialIcon name={icon} />
			<EditableSpan title={title} changeTitle={changeTitle} link={link}/>
		</NavLink>
		{link.includes('custom') && <>
			<button onClick={onDeleteCategory}>
				<MaterialIcon name={'MdDelete'} />
			</button>
		</>}
	</li>
})



