import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './styles/Register.css';

class Input extends React.Component {
	render() {
		return (
			<div className="input">
				<input id={this.props.id} autoComplete="false" required type={this.props.type} placeholder={this.props.placeholder} />
				<label htmlFor={this.props.id}></label>
			</div>
		);
	}
}

class Modal extends React.Component {
	render() {
		return (
			<div className="modal">
				<form onSubmit={this.props.onSubmit} className="modal-form">
					<Input id="name" type="text" placeholder="Jack-Edward Oliver" />
					<Input id="username" type="email" placeholder="mrjackolai@gmail.com" />
					<Input id="password" type="password" placeholder="password" />
					<button>Log in <i className="fa fa-fw fa-chevron-right"></i></button>
				</form>
			</div>
		);
	}
}

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = { mounted: false };
	}

	handleSubmit(e) {
		this.setState({ mounted: false });
		e.preventDefault();
	}

	render() {

		var child = (<Modal onSubmit={this.handleSubmit} />);

		return (
			<div className="register">
				<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
					{child}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

export default Register;