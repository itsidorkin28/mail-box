import React from 'react'
import LettersTable from '../../ui/letters-table/LettersTable'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useLocation } from 'react-router-dom'

const Custom = () => {
	const lettersTableData = useTypedSelector(state => state.letters)
	const location = useLocation().pathname
	const category = useTypedSelector(state => state.categories.items).filter(f => f.link === location)[0].category
	return (
		<div>
			<LettersTable headerItems={['Author', 'Preview', 'Date']}
			              tableItems={lettersTableData || []}
			              category={category} />
		</div>
	)
}

export default Custom
