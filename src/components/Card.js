	import React from 'react';

//used {name, email, id} by destructuring (ES6) props

const Card = ({name, email, id}) => {
	return (
		
			<div className = 'tc bg-light-green dib br3 pa3 ma2 grow shadow-5'>
				<img src = {`https://robohash.org/${id}?size=250x250`} alt = 'robot'/>
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
		
		);
}

export default Card;