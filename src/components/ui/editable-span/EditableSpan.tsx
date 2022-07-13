import React, { useCallback, useState } from 'react'
import { IEditableSpan } from './EditableSpan.props'

export const EditableSpan = React.memo(({
	                                        title,
	                                        changeTitle,
	                                        link,
                                        }: IEditableSpan): JSX.Element => {
	const [editMode, setEditMode] = useState<boolean>(false)
	const [value, setValue] = useState<string>(title)
	const onEditMode = useCallback(() => {
		if (link.includes('custom')) {
			setEditMode(true)
		} else {
			return
		}
	}, [link])
	const offEditMode = useCallback(() => {
		setEditMode(false)
		changeTitle(value)
	}, [changeTitle, value])
	const onChangeHandle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value)
	}, [])

	if (editMode) {
		return <input value={value} onBlur={offEditMode} autoFocus
		              onChange={onChangeHandle} />
	} else {
		return <span onDoubleClick={onEditMode}>{title}</span>
	}

})
