import { lettersActions } from './letters/letters.slice'
import { categoriesActions } from './categories/categories.slice'
import { dragActions } from './drag-and-drop/drag-and-drop.slice'
import { modalActions } from './modal-window/modal-window.slice'

export const allActions = {
	...lettersActions, ...categoriesActions, ...dragActions, ...modalActions,
}
