import React from 'react'
import HeaderComp from './HeaderComp'
import PageComp from './pages/PageComp'
import './main.css'

import homeBackground from '../assets/homeBackground.png'


class MainComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageView: 1
		};

	}

	getBackground() {
		switch (this.state.pageView) {
			case 1:
				return homeBackground
			default:
				return null
		}
	}

	render() {
		return (
			<div style={{ backgroundImage: `url(${this.getBackground()})`, height: "100%" }}>
				<div class="page">
					<div class="row header"><HeaderComp /></div>
					<div class="row contnet"><h1>test</h1></div>
					<div class="row footer"></div>
				</div>
			</div>
		);
	}
}

export default MainComp