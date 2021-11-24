import React from 'react';
import {useDispatch} from 'react-redux'

class SignInComp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {username: '', password: ''}
		this.handleSubmit = this.handleSubmit.bind(this);
		const dispatch = useDispatch()
	}

	handleSubmit(event) {
		event.preventDefault();
		// login the user on the server side
		const userJson = {
			id: 1,
			username: this.state.username,
			firstName: 'Om'
		}
		dispatch(login(userJson));
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.username}/>
					<input type="password" value={this.state.password}/>
					<input type="submit" value="submit"/>
				</form> 
				<h1>SignInComp</h1>
			</div>
		);
	}

}

export default SignInComp;