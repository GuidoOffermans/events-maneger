import React from 'react';
import { loadEvents } from '../../redux/actions/events';
import { connect } from 'react-redux';
import EventsList from './EventsList';
import CreateEventFormContainer from '../CreateEventForm/CreateEventFormContainer';

class EventsListContainer extends React.Component {
	componentDidMount() {
		this.props.loadEvents();
	}

	render() {
		return (
			<div>
				{this.props.events !== null ? (
					<EventsList events={this.props.events} />
				) : (
					'laoding'
				)}
				<CreateEventFormContainer />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	events: state.events
});

export default connect(mapStateToProps, { loadEvents })(EventsListContainer);
