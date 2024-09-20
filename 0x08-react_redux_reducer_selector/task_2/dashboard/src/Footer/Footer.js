import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { AppContext } from '../App/AppContext';

const Footer = () => {
  return (
    <AppContext.Consumer>
    {({ user: { email, password, isLoggedIn }, logOut }) => (
      <footer className="footer">
          {isLoggedIn && (
            <p>
              <a>Contact us</a>
            </p>
          )}
          <h2>Copyright © {getFullYear()} - {getFooterCopy(true)}</h2>
      </footer>
      )}
    </AppContext.Consumer>
  );
}

export default Footer;
