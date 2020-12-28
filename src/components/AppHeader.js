import React from 'react';
import Logo from './Logo';
import appLogo from '../avatar.jpg';
import Navigation from './Navigation';
import UserMenu from './UserMenu';

const navItems = ['menu', 'about', 'contact', 'delivery'];

const AppHeader = () => (
  <header className="Header">
    <div className="Header__logo">
      <Logo image={appLogo} width={250} height={195} />
    </div>
    <div className="menu">
      <Navigation items={navItems} />
    </div>
    <div className="Header__usermenu">
      <UserMenu />
    </div>
  </header>
);

export default AppHeader;
