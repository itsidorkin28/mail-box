import React from 'react'
import * as MaterialIcons from 'react-icons/md'
import { TypeMaterialIconName } from '../../shared/types/icon.types'

interface IMaterialIcon {
	name: TypeMaterialIconName
}

export const MaterialIcon = ({ name }: IMaterialIcon): JSX.Element => {
	const IconComponent = MaterialIcons[name]
	return <IconComponent /> || <MaterialIcons.MdDragIndicator />
}



