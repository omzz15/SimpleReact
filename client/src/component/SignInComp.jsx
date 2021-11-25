import React from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../action/userAction';
import store from '../redux/store'

class SignInComp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {username: '', password: ''}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.loginUser(this.state.username, this.state.password);
		alert(store.get)
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}/>
					<input type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
					<input type="submit" value="submit"/>
				</form> 
				<h1>SignInComp</h1>
			</div>
		);
	}

}

export default connect(null, {loginUser}) (SignInComp);
