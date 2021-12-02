import React from 'react';

class SignUpComp extends React.Component {

	render() {
		return (
			<div>
				<form action="/add-user" method="POST">
					<input type="email" name="email" id="email_input" />
					<input type="text" name="username" id="username_input" />
					<input type="text" name="fname" id="fname_input" />
					<input type="text" name="lname" id="lname_input" />
					<input type="password" name="password" id="password_input" />
					<input type="submit" value="submit" />
				</form>
			</div>
		);
	}

}

export default SignUpComp;