import React from 'react'


class HeaderComp extends React.Component {

	constructor(props) {
		super(props)
		this.state = {login_div_visible: false, user_div_visible: true, name:null};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render() {
		return (
			<div>
				<nav class="navbar navbar-dark bg-dark">
					<div class="container-fluid">
						<a class="navbar-brand" href="#">Recipe App</a>
						<div id='header_login_div' hidden={this.state.login_div_visible}>
							<form class="d-flex" onSubmit={this.handleSubmit}>
								<input class="form-control me-2" type="username" placeholder="username" aria-label="Username" />
								<input class="form-control me-2" type="password" placeholder="password" aria-label="Password" />
								<button class="btn btn-outline-success" type="submit">Login</button>
							</form>
						</div>
						<div id='header_user_div' hidden={this.state.user_div_visible}>
							hello john
						</div>
					</div>
				</nav>
			</div>
		);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.setState({login_div_visible: true, user_div_visible: false})
		return false;
	}
}

export default HeaderComp;
