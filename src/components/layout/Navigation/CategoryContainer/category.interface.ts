import { TypeMaterialIconName } from '../../../../shared/types/icon.types'

export interface ICategoryItem {
	_id: string
	icon: TypeMaterialIconName
	title: string
	link: string
	category: string
}

export interface ICategory {
	title: string
	items: ICategoryItem[]
}

export interface ICategoryCreateInput extends Omit<ICategoryItem, 'icon' | 'link'> {

}

