import React from 'react';

var Scroll = (props) => {
	return (
		<div style = {{ overflow: 'scroll', border: '5px solid black', height: '800px' }}> 
			{props.children}
		</div> 
		);
}
export default Scroll; 