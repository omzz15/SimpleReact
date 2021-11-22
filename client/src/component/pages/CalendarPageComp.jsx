import React from "react";

class CalendarPageComp extends React.Component {
	render() {
		return( 
			<div>
				<iframe src="https://calendar.google.com/calendar/embed?src=patelom%40students.holliston.k12.ma.us&ctz=America%2FNew_York" style={{border: 0}} width="100%" height="600" frameborder="0" scrolling="no"></iframe>
			</div>
		);
	}
}

export default CalendarPageComp