import React from 'react';

export default function EventForm(props) {
  // console.log('propss',props)
	return (
		<form onSubmit={props.onSubmit}>
			<label>
				Name:
				<input onChange={props.onChange} type="text" name="name" value={props.values.name} />
			</label>
      <label>
				date:
				<input onChange={props.onChange} type="text" name="date" value={props.values.date} />
			</label>
      <label>
				description:
				<input onChange={props.onChange} type="text" name="description" value={props.values.description} />
			</label>
			<input type="submit" value="Save" />
		</form>
	);
}
