import { EVENT_FETCHED } from '../actions/events';

export default (state = null, action = {}) => {
	console.log('state:', state, 'action:', action);
	switch (action.type) {
    	case EVENT_FETCHED:
        return  action.event;
		default:
			return state;
	}
};
