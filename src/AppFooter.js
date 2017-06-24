import React from 'react';
import {Link} from 'react-router';

import './styles/AppFooter.scss';

class AppFooter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            socialData: [],
            footerLinks: []
        };
    }

    componentDidMount() {
        this.getFooterData();
    }

    getFooterData() {
        this.setState({
            footerLinks: [
                {
                    route: "/home",
                    value: "Home"
                }, {
                    route: "/contact",
                    value: "Contact"
                }, {
                    route: "/about",
                    value: "About Us"
                }
            ]
        });
        this.setState({
            socialData: [
                {
                    style: {
                        backgroundImage: "url('./images/facebook.svg')"
                    },
                    class: 'facebook',
                    url: 'https://www.facebook.com/'
                }, {
                    style: {
                        backgroundImage: "url('./images/twitter.svg')"
                    },
                    class: 'twitter',
                    url: 'https://twitter.com'
                }, {
                    style: {
                        backgroundImage: "url('./images/instagram.svg')"
                    },
                    class: 'instagram',
                    url: 'https://www.instagram.com'
                }, {
                    style: {
                        backgroundImage: "url('./images/snapchat.svg')"
                    },
                    class: 'snapchat',
                    url: 'https://www.snapchat.com/'
                }
            ]
        });
    }

    render() {

        var currentYear = new Date().getFullYear() + ' ';

        const footerLinks = this
            .state
            .footerLinks
            .map((link, index) => {
                // each dom repeater needs a unique key
                let footerLink = <li key={String(index)}>
                    <Link to={link.route}>
                        {link.value}
                    </Link>
                </li>;

                return footerLink;
            });

        const socialMedia = this
            .state
            .socialData
            .map((social, index) => {
                // each dom repeater needs a unique key
                let socialSite = <li key={String(index)}>
                    <a
                        style={social.style}
                        className={social.class}
                        title={social.title}
                        href={social.url}></a>
                </li>;

                return socialSite;
            });

        return (
            <footer>
                <div className="links">
                    <div className="float-left">
                        <ul>
                            {footerLinks}
                        </ul>
                    </div>
                    <div className="float-right">
                        <ul className="social">
                            {socialMedia}
                        </ul>
                    </div>
                    <div className="copyright">
                        <p>© {currentYear}
                            Straight Fire LLC. All Rights Reserved.</p>
                    </div>
                    <div className="clear-footer"></div>
                </div>
            </footer>
        );
    }
}

export default AppFooter;
