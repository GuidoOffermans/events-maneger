import React from 'react';
import { connect } from 'react-redux';
import EventDetails from './EventDetails';
import {
	loadEvent,
	updateEvent,
	deleteEvent
} from '../../redux/actions/events';

class EventDetailsContainer extends React.Component {
	componentDidMount() {
		this.props.loadEvent(Number(this.props.match.params.id));
	}

	onDelete = () => {
    console.log('delete pressed')
		this.props.deleteEvent(this.props.event.id);
		this.props.history.push('/');
	};

	render() {
		return this.props.event !== null ? (
			<EventDetails event={this.props.event} onDelete={this.onDelete} />
		) : (
			'loading..'
		);
	}
}

const mapStateToProps = (state) => ({
	event: state.event
});

export default connect(mapStateToProps, { loadEvent, deleteEvent })(
	EventDetailsContainer
);
