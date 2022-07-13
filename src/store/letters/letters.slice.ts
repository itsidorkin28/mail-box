import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITableItem } from '../../components/ui/letters-table/letters-table.interface'

const initialState: ITableItem[] = [
	{
		_id: '0',
		category: 'inbox',
		items: {
			author: 'Sid',
			preview: 'dsds',
			date: '8 feb'
		}
	},
	{
		_id: '1',
		category: 'inbox',
		items: {
			author: 'Hanna',
			preview: '43f dsds',
			date: '8 feb'
		}
	},
	{
		_id: '2',
		category: 'spam',
		items: {
			author: 'Sasha',
			preview: '432fd fd',
			date: '8 feb'
		}
	},
	{
		_id: '3',
		category: 'sent',
		items: {
			author: 'Alina',
			preview: 'fds3 34f',
			date: '8 feb'
		}
	},
]


export const lettersSlice = createSlice({
	name: 'letters',
	initialState,
	reducers: {
		setCategory: (state, action: PayloadAction<{ _id: string, category: string }>) => {
			const index = state.findIndex(letter => letter._id === action.payload._id)
			if (index !== -1) state[index].category = action.payload.category
		},
	},
})

export const { reducer } = lettersSlice
export const lettersActions = lettersSlice.actions
