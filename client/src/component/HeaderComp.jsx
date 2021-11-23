import React from 'react'
import logo from '../assets/logo.png';

class HeaderComp extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={{width:"100%"}}>
				<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
					<a class="navbar-brand" href="#">
						<img src={logo} width="61" height="45" />
						Code Club
					</a>
					<div class="collapse navbar-collapse">
						<ul class="navbar-nav mr-auto">
							<li class="nav-item">
								<a class="nav-link" href="#">About Us</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Members</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Projects</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Lessons</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Calendar</a>
							</li>
						</ul>

						<form class="form-inline" onsubmit="return false">
							<button class="btn btn-outline-primary my-2 my-sm-0">Sign Up</button>
							<button class="btn btn-outline-primary my-2 my-sm-0" style={{ marginLeft: "10px" }}>Sign In</button>
						</form>
					</div>
				</nav>
			</div>
		);
	}

}

export default HeaderComp;