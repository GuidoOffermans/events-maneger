import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EventsList extends Component {
	render() {
		return (
			<ul>
				{this.props.events.map((event) => (
					<li key={event.id}>
						<Link to={`/events/${event.id}`}>
							{event.description}
						</Link>
					</li>
				))}
			</ul>
		);
	}
}

export default EventsList;
