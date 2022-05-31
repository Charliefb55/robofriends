import React from 'react';

//this function creates cards that will contain a picture of the robot as well
//as the robots information. We are paasing the props of the robots into the 
//const as a javascript function(deconstructing) so they can be differentiated 
//between the robots. the classNames are for styling.
const Card = ({ name, email, id }) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<div>
			<h2>{name}</h2>
			<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;