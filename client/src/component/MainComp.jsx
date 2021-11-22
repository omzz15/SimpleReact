import React from 'react';
import HeaderComp from './HeaderComp';
import PageComp from './pages/PageComp'


class MainComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageView : 1
		};
		
	}

	render() {
		return(
		<div >
			<HeaderComp/>
			<PageComp pageView = {this.state.pageView}/>
		</div>
		);
	}
}

export default MainComp