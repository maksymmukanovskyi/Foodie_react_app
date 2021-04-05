import React from 'react';
import Logo from './Logo';
import appLogo from '../avatar.jpg';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
// import avatar from '../avatar.jpg';

const navItems = ['Menu', 'About', 'Contact', 'Delivery'];

const AppHeader = () => (
  <header className="Header">
    <div className="Header__logo">
      <Logo image={appLogo} />
    </div>
    <div className="Header__usermenu">
      <Navigation items={navItems} />
    </div>
    <div>
      <UserMenu avatar={appLogo} name="Bob Marley" />
    </div>
  </header>
);

export default AppHeader;
