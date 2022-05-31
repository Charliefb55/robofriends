import React from 'react';

//creating a searchbox to search the array of robots. takes in the input of 
//the search field and runs the searchChange function to create a listener
//and communicate with the app to update the state
const SearchBox = ({ searchField, searchChange}) => {
	return (
		<div className='pa2'>
			<input className='pa3 ba b--green bg-lightest-blue'type='search' 
			placeholder='search robots' onChange={searchChange}/>
		</div>
	);
}

export default SearchBox;