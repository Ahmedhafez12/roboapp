import React from 'react';

var SearchBar = ({searchField, searchChange}) => {
	return (
		<div className = 'pa2'>
			<input className = 'pa3 ba b--green bg-lightest-blue'
			type = 'search'
			placeholder = 'search' 
			onChange = {searchChange}
			/>
		</div>
	);
}
export default SearchBar;