import React from 'react';

var RoboticIdentification = ({name , email , id}) => {
	return(
	<div className = 'tc bg-light-red ma3 br3 pa3 dib shadow-5 grow bw2'>
		<img alt = 'robot' src = {`https://robohash.org/${id}?200x200`} /> 
		<div>
			<h2> {name} </h2>
			<p> {email}</p>
		</div>
	</div>
	);
}

export default RoboticIdentification; 