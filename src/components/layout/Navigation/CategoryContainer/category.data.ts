import { ICategory } from './category.interface'

export const mainCategories: ICategory = {
	title: 'Categories',
	items: [
		{
			_id: '43',
			icon: 'MdInbox',
			link: '/inbox',
			title: 'Inbox',
			category: 'inbox',
		},
		{
			_id: '23',
			icon: 'MdSend',
			link: '/sent',
			title: 'Sent',
			category: 'sent',
		},
		{
			_id: '234',
			icon: 'MdWarning',
			link: '/spam',
			title: 'Spam',
			category: 'spam',
		},
		{
			_id: '213',
			icon: 'MdDrafts',
			link: '/drafts',
			title: 'Drafts',
			category: 'drafts',
		},
		{
			_id: '2301',
			icon: 'MdRestoreFromTrash',
			link: '/trash',
			title: 'Trash',
			category: 'trash',
		},
	],
}



