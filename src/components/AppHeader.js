import React from 'react';
import Logo from './Logo';
import appLogo from '../avatar.jpg';

const AppHeader = () => (
  <header>
    <div className="logo">
      <Logo image={appLogo} />
    </div>
    <div className="menu">menu</div>
    <div className="usermenu">usermenu</div>
  </header>
);

export default AppHeader;
