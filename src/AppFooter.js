import React from 'react';
import { Link } from 'react-router';

import './styles/AppFooter.scss';

class AppFooter extends React.Component {

  render() {

		var socialStyles = {
			facebook: {
				backgroundImage: "url('./images/facebook.svg')"
			},
			twitter: {
				backgroundImage: "url('./images/twitter.svg')"
			},
			instagram: {
				backgroundImage: "url('./images/instagram.svg')"
			}
		};

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
							<li><a style={socialStyles.facebook} className="facebook" href="https://www.facebook.com/" title="View Straight Fire's Facebook profile">Facebook</a></li>
							<li><a style={socialStyles.twitter} className="twitter" href="https://twitter.com" title="Follow Straight Fire on Twitter">Twitter</a></li>
							<li><a style={socialStyles.instagram} className="instagram" href="https://www.instagram.com" title="Follow Straight Fire on Instagram">Instagram</a></li>
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

