import React from 'react'
import ReduxToastrLib from 'react-redux-toastr'

const ReduxToast = () => {
	return (
		<ReduxToastrLib
		newestOnTop={false}
		preventDuplicates
		progressBar
		closeOnToastrClick
		timeOut={4000}
		transitionIn={'fadeIn'}
		transitionOut={'fadeOut'}
		position={'bottom-right'}
		/>
	)
}

export default ReduxToast
