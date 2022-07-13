import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICategory } from '../../components/layout/Navigation/CategoryContainer/category.interface'
import { v1 } from 'uuid'

const initialState: ICategory = {
	title: 'Custom Categories',
	items: [
		{
			_id: '0',
			icon: 'MdDragIndicator',
			link: '/custom/favorites',
			title: 'Favorites',
			category: 'favorites',
		},
		{
			_id: '1',
			icon: 'MdDragIndicator',
			link: '/custom/work',
			title: 'Work',
			category: 'work',
		},
	],
}


export const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		createCategory: (state, action: PayloadAction<{ title: string, category: string }>) => {
			const { title, category } = action.payload

			if (state.items.filter(i => i.category === category).length
				|| state.items.filter(i => i.title === title).length) return

			state.items.unshift({ _id: v1(), icon: 'MdDragIndicator', title, link: `/custom/${category}`, category })

		},
		updateCategory: (state, action: PayloadAction<{ _id: string, newTitle: string }>) => {
			const { newTitle, _id } = action.payload
			const index = state.items.findIndex(i => i._id === _id)
			if (index !== -1) {
				state.items[index].title = newTitle
			}
		},
		deleteCategory: (state, action: PayloadAction<{ category: string }>) => {
			const { category } = action.payload
			const index = state.items.findIndex(i => i.category === category)
			if (index !== -1) state.items.splice(index, 1)
		},
	},
})

export const { reducer } = categoriesSlice
export const categoriesActions = categoriesSlice.actions
