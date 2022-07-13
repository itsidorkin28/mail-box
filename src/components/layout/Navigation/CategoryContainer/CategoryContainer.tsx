import React from 'react'
import { mainCategories } from './category.data'
import { Category } from './Category'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'


export const CategoryContainer = (): JSX.Element => {
	const {title, items} = useTypedSelector(state => state.categories)
	return <div>
		<Category title={mainCategories.title} items={mainCategories.items} />
		<Category title={title} items={items} />
	</div>
}
