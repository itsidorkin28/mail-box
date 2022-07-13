import React, { FC, useCallback } from 'react'
import { toastr } from 'react-redux-toastr'
import { useActions } from '../../../../hooks/useActions'
import { MaterialIcon } from '../../MaterialIcon'

interface ILettersActions {
	_id: string
	category: string
}

const LettersActions: FC<ILettersActions> = ({ _id, category }) => {
	const { setCategory } = useActions()
	const setCategoryHandle = useCallback((category: string) => {
		setCategory({ _id, category })
		toastr.success(`${category.toUpperCase()}`, `${category} successful`)
	}, [_id, setCategory])
	return (
		<div>
			<button onClick={() => setCategoryHandle('trash')} disabled={category === 'trash'}>
				<MaterialIcon name={'MdRestoreFromTrash'} />
			</button>
		</div>
	)
}

export default LettersActions
