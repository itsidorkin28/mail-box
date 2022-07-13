import React from 'react'
import LettersTable from '../../ui/letters-table/LettersTable'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

const Sent = () => {
	const lettersTableData = useTypedSelector(state => state.letters)
	return (
		<div>
			<LettersTable headerItems={['Author', 'Preview', 'Date']}
			              tableItems={lettersTableData || []}
			              category={'sent'} />
		</div>
	)
}

export default Sent
