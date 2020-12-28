import React, { Component } from 'react';
import DropDown from './DropDown';
import Avatar from './Avatar';
import avatar from '../avatar.jpg';

export default class UserMenu extends Component {
  state = {
    isDropDownOpen: false,
  };

  toggleDropDown = () => {
    this.setState(state => ({
      isDropDownOpen: !state.isDropDownOpen,
    }));
  };

  render() {
    const { isDropDownOpen } = this.state;
    return (
      <div onClick={this.toggleDropDown}>
        <Avatar image={avatar} />
        <span>Bob Ross</span>
        {isDropDownOpen && <DropDown />}
      </div>
    );
  }
}
