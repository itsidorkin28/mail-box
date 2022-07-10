import React from 'react'
import { menu } from './menu.data'
import { Menu } from './Menu'


export const MenuContainer = (): JSX.Element => {

	return <div>
		<Menu title={menu.title} items={menu.items} />
	</div>
}
