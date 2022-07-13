import { reducer as lettersReducer } from './letters/letters.slice'
import { reducer as categoriesReducer } from './categories/categories.slice'
import { reducer as dragReducer } from './drag-and-drop/drag-and-drop.slice'
import { reducer as modalReducer } from './modal-window/modal-window.slice'
import { reducer as toastrReducer } from 'react-redux-toastr'

export const reducers = {
	letters: lettersReducer,
	categories: categoriesReducer,
	drag: dragReducer,
	modal: modalReducer,
	toastr: toastrReducer,
}
