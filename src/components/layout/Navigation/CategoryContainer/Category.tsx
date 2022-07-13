import React from 'react'
import styles from './Category.module.scss'
import { CategoryItem } from './CategoryItem'
import { ICategory } from './category.interface'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { MaterialIcon } from '../../../ui/MaterialIcon'
import { useActions } from '../../../../hooks/useActions'

export const Category = ({ title, items }: ICategory): JSX.Element => {
	const customCategoryTitle = useTypedSelector(state => state.categories.title)
	const { setModalActive } = useActions()

	const onModalActive = () => {
		setModalActive({ active: true })
	}

	return <div className={styles.category}>
		<div className={styles.heading}>
			<div>
				{title}
			</div>
			{title === customCategoryTitle &&
				<button className={'ml-1'} onClick={onModalActive}>
					<MaterialIcon name={'MdAdd'} />
				</button>}
		</div>
		<nav>
			<ul className={styles.ul}>
				{items.map(item => {
					return <CategoryItem key={item.link}
					                     title={item.title}
					                     link={item.link}
					                     icon={item.icon}
					                     category={item.category}
					                     _id={item._id}
					/>
				})}
			</ul>
		</nav>
	</div>
}



