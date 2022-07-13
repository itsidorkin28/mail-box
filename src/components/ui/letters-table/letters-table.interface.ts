export interface ITableItem {
	_id: string
	category: string
	items: {
		author: string,
		preview: string,
		date: string
	}
}

export interface ILettersTableItem {
	tableItem: ITableItem
}
