import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
	currentDragCategory: '' as string,
}


export const dragSlice = createSlice({
	name: 'drag-and-drop',
	initialState,
	reducers: {
		setCurrentDragCategory: (state, action: PayloadAction<{ category: string }>) => {
			state.currentDragCategory = action.payload.category
		},
	},
})

export const { reducer } = dragSlice
export const dragActions = dragSlice.actions
