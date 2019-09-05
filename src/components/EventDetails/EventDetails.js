import React from 'react';

export default function EventDetails(props) {
	console.log("event details",props);
	return (
		<div>
			<h1>{props.event.name}</h1>
      <i>Date: {props.event.date}</i>
      <p>{props.event.description}</p>
      <button onClick={props.onDelete}>delete</button>
		</div>
	);
}
