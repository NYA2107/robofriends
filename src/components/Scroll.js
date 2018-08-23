import React from 'react'

const styleProps = {
	marginTop: '10px', 
	overflowY: 'scroll', 
	border: '5px solid black', 
	height: '500px'
}

const Scroll = ({children}) => {
	return(
		<div style={styleProps}>
			<h1> ROBOT </h1>
			{
				children
			}
		</div>
	);
}

export default Scroll;