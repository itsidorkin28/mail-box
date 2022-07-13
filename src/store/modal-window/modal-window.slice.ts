import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
	modalActive: false as boolean,
}


export const modalSlice = createSlice({
	name: 'modal-window',
	initialState,
	reducers: {
		setModalActive: (state, action: PayloadAction<{ active: boolean }>) => {
			state.modalActive = action.payload.active
		},
	},
})

export const { reducer } = modalSlice
export const modalActions = modalSlice.actions
