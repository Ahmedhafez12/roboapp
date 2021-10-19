import React from 'react';
import RoboticIdentification from './RoboticIdentification';

var RoboticParent = ({robots}) => {
	if (false){
		throw new Error("There is an error");
	}
	return(
		<div>
		{
			robots.map((user, i) => {
				return ( 
					<RoboticIdentification 
						key = {i} 
						name = {robots[i].name} 
						email = {robots[i].email} 
						id = {robots[i].id} 
					/>
				);		
			})
		}
		</div>
		);
}

export default RoboticParent;