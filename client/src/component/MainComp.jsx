import React from 'react'
import { connect } from 'react-redux';
import HeaderComp from './HeaderComp'
import PageComp from './pages/PageComp'
import './main.css'

import homeBackground from '../assets/homeBackground.png'


class MainComp extends React.Component {
	getBackground() {
		switch (this.props.views.page) {
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
					<div class="row contnet"><PageComp/></div>
					<div class="row footer"></div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
    return {
        views: state.views
    };
}

export default connect(mapStateToProps, null) (MainComp);