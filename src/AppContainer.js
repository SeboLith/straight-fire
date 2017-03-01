import React from 'react';

import AppHeader from './AppHeader';

import './styles/AppContainer.css';

class AppContainer extends React.Component {

  render() {
    return (
      <div className="page">
        <AppHeader />
        {this.props.children}
      </div>
    );
  }
}

export default AppContainer;

