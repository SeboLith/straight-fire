import React from 'react';

import './styles/NCButton.scss';

class NCButton extends React.Component {
	render() {

		let path;

		switch (this.props.icon) {
			case 'home':
				path = 'img/home.svg';
				break;
			case 'about':
				path = 'img/about.svg';
				break;
			case 'signup':
				path = 'img/signup.svg';
				break;
			default:
				path = '';
		}

		let icon = <img className="header-icon" src={path} alt={this.props.desc} />;

		return (
			<div className="well">
				{icon}
				<div >
					{this.props.name}
				</div>
			</div>
		);
	}
}

export default NCButton;