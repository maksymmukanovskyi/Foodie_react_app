import React from 'react';
import Logo from './Logo';
import appLogo from '../avatar.jpg';
import Navigation from './Navigation';

const navItems = ['menu', 'about', 'contact', 'delivery'];

const AppHeader = () => (
  <header>
    <div className="logo">
      <Logo image={appLogo} width={250} height={195} />
    </div>
    <div className="menu">
      <Navigation items={navItems} />
    </div>
    <div className="usermenu">usermenu</div>
  </header>
);

export default AppHeader;
