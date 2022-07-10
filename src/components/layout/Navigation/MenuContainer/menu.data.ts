import { IMenu } from './menu.interface'

export const menu: IMenu = {
	title: 'Menu',
	items: [
		{
			icon: 'MdInbox',
			link: '/inbox',
			title: 'Inbox',
		},
		{
			icon: 'MdSend',
			link: '/sent',
			title: 'Sent',
		},
		{
			icon: 'MdWarning',
			link: '/spam',
			title: 'Spam',
		},
		{
			icon: 'MdDrafts',
			link: '/drafts',
			title: 'Drafts',
		},
		{
			icon: 'MdRestoreFromTrash',
			link: '/trash',
			title: 'Trash',
		},
	],
}

