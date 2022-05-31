import React from 'react';

//this is a function that you can use to wrap a component in a scroll box. we
//do this by using the children of the wrapped component and the render that is 
//already available.
const Scroll = (props) => {
	return(
		<div style={{overflowY: 'scroll', height: '800px'}}>
			{props.children}
		</div>
	);
}

export default Scroll;