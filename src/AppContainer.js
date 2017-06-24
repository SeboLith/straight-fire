import React from 'react';

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

import './styles/AppContainer.scss';

class AppContainer extends React.Component {

  render() {
    return (
      <div className="page">
        <AppHeader />
        {this.props.children}
        <AppFooter />
      </div>
    );
  }
}

export default AppContainer;

