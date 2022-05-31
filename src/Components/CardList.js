import React from 'react';
import Card from './Card';

//this function loops throught the robots array by using the map function and 
//creates a new card with a key based on the different characterictics of the 
//robots. We pass the prop of the robots array and use the user and index(i)
//arguments in the map function to assign each robot a different key
const CardList = ({ robots }) => {
	const cardsArray = robots.map((user, i)  => {
		return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
	})
	//here we are just returning the newly mapped cardsArray
	return (
		<div>
			{ cardsArray }
		</div>
	);
}

export default CardList;