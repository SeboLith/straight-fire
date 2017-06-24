import React from 'react';
import { Link } from 'react-router';

import './styles/AppFooter.scss';

// var socialStyles = {
// 	facebook: 'transparent url(./images/facebook.svg) no-repeat -60px -68px',
// 	twitter: 'transparent url(./images/twitter.svg) no-repeat -30px -68px',
// 	instagram: 'transparent url(./images/instagram.svg) no-repeat -60px -68px'
// };

class AppFooter extends React.Component {

  render() {
    return (
      <footer>
        <div className="links">
			<div className="float-left">
				<ul>
					<li><Link to="/home">Home</Link></li>
					<li><Link to="/contact">Contact</Link></li>
					<li><Link to="/about">About Us</Link></li>
				</ul>
			</div>
			<div className="float-right">
				<ul className="social">
					<li><Link className="facebook" to="http://www.facebook.com/pages/Gainesville-FL/Flourish-Web-Design/147694954636?ref=ts" title="View Straight Fire's Facebook profile">Facebook</Link></li>
					<li><Link className="twitter" to="http://twitter.com/cbrauckmuller" title="Follow Straight Fire on Twitter">Twitter</Link></li>
					<li><Link className="instagram" to="http://www.expressionengine.com" title="Follow Straight Fire on Instagram">Instagram</Link></li>
				</ul>
			</div>
			<div className="copyright"><p>© 2017 Straight Fire LLC. All Rights Reserved.</p></div>
			<div className="clear-footer"></div>
        </div>
      </footer>
    );
  }
}

export default AppFooter;

