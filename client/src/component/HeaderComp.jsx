import React from 'react'
import logo from '../assets/logo.png';
import { connect } from 'react-redux';

import { setPageView } from "../action/viewsAction"
import { loginUser } from '../action/userAction';

class HeaderComp extends React.Component {

	constructor(props) {
		super(props);
		this.setPageView = this.setPageView.bind(this)
		this.state = { username: '', password: '' }
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	setPageView(event, view) {
		event.preventDefault();
		this.props.setPageView(view)
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.loginUser(this.state.username, this.state.password);
		alert(this.props.user.status)
	}

	renderLoginForm() {
		if (this.props.user.id == null)
			return [
				<form class="form-inline" onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
					<input type="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
					<button class="btn btn-outline-primary my-2 my-sm-0" style={{ marginRight: "10px" }} type="submit" value="submit">Sign In</button>
				</form>,
				<button class="btn btn-outline-primary my-2 my-sm-0" onClick={(e) => this.setPageView(e, 7)}>Sign Up</button>
			];
		else
			return (
				<p1>Welcome {this.props.user.fname}</p1>
			)
	}

	render() {
		return (
			<div style={{ width: "100%" }}>
				<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
					<a class="navbar-brand" onClick={(e) => this.setPageView(e, 1)} style={{color: "white"}}>
						<img src={logo} width="61" height="45" />
						Code Club
					</a>
					<div class="collapse navbar-collapse">
						<ul class="navbar-nav mr-auto">
							<li class="nav-item">
								<a class="nav-link" onClick={(e) => this.setPageView(e, 2)}>About Us</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" onClick={(e) => this.setPageView(e, 3)}>Members</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" onClick={(e) => this.setPageView(e, 4)}>Projects</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" onClick={(e) => this.setPageView(e, 5)}>Lessons</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" onClick={(e) => this.setPageView(e, 6)}>Calendar</a>
							</li>
						</ul>
						{this.renderLoginForm()}
					</div>
				</nav>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		user: state.user
	};
}

export default connect(mapStateToProps, { setPageView, loginUser })(HeaderComp);