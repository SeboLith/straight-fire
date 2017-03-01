import React from 'react';
import { Link } from 'react-router';

import './styles/AppHeader.css';

class AppHeader extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      scrolled: false
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  /**
   * scroll handler that sets a boolean value on the state tracking inf the page scrolls
   */
  handleScroll() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom !== windowHeight) {
      this.setState({
        scrolled: true
      });
    } else {
      this.setState({
        scrolled: false
      });
    }
  }

  /**
   * add a scroll listener after the AppHeader component is mounted
   */
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <header className={this.state.scrolled ? 'clear scrolled' : 'clear'}>
        <Link className="logo" to="/">
          <img src="/images/logo.svg" alt="Logo" width="250" height="47"></img>
        </Link>
        <div className={this.state.scrolled ? 'nav-buttons clear scrolled' : 'nav-buttons clear'}>
          <Link to="/account/login" className="sign-in rounded-button">Sign in</Link>
        </div>
      </header>
    );
  }
}

export default AppHeader;

