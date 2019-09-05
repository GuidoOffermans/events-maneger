import request from 'superagent';

export const EVENTS_FETCHED = 'EVENTS_FETCHED';

const baseUrl = 'http://localhost:4000';

const eventsFetched = (events) => ({
	type: EVENTS_FETCHED,
	events
});

export const loadEvents = () => (dispatch, getState) => {
	// when the state already contains events, we don't fetch them again
	if (getState().events) return;

	// a GET /events request
	request(`${baseUrl}/events`)
		.then((response) => {
			// dispatch an EVENTS_FETCHED action that contains the events
			dispatch(eventsFetched(response.body));
		})
		.catch(console.error);
};

export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS';

const eventCreateSuccess = (event) => ({
	type: EVENT_CREATE_SUCCESS,
	event
});

export const createEvent = (data) => (dispatch) => {
	request
		.post(`${baseUrl}/events`)
		.send(data)
		.then((response) => {
			dispatch(eventCreateSuccess(response.body));
		})
		.catch(console.error);
};

export const EVENT_FETCHED = 'EVENT_FETCHED';

const eventFetched = (event) => ({
	type: EVENT_FETCHED,
	event
});

export const loadEvent = (eventId) => (dispatch) => {
	request
		.get(`${baseUrl}/events/${eventId}`)
		.then((response) => {
			dispatch(eventFetched(response.body));
		})
		.catch(console.error);
};

export const EVENT_DELETE_SUCCESS = 'EVENT_DELETE_SUCCESS';

const eventDeleted = (id) => ({
	type: EVENT_DELETE_SUCCESS,
	id
});

export const deleteEvent = (eventId) => (dispatch) => {
	request
    .delete(`${baseUrl}/events/${eventId}`)
    .then(response =>  Number(response.body.id))
		.then((id) => dispatch(eventDeleted(id)))
		.catch(console.error);
};

export const EVENT_UPDATED = 'EVENT_UPDATED';

const eventUpdated = (id) => ({
	type: EVENT_UPDATED,
	id
});

export const updateEvent = (eventId, updatedData) => (dispatch) => {
	request
    .put(`${baseUrl}/events/${eventId}`)
    .then(response =>  Number(response.body.id))
		.then((id) => dispatch(eventUpdated(id)))
		.catch(console.error);
};