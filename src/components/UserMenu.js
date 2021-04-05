import React, { Component, createRef } from 'react';
import DropDown from './DropDown';
import Avatar from './Avatar';
import avatar from '../avatar.jpg';

class UserMenu extends Component {
  containerRef = createRef();

  state = {
    isDropDownOpen: false,
  };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  toggleDropDown = () => {
    this.setState(state => ({
      isDropDownOpen: !state.isDropDownOpen,
    }));
  };

  handleWindowClick = e => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );

    const { isDropDownOpen } = this.state;
    if (!isTargetInsideContainer && isDropDownOpen) {
      this.toggleDropDown();
    }
  };

  render() {
    const { isDropDownOpen } = this.state;
    return (
      <div
        onKeyDown={this.toggleDropDown}
        onClick={this.toggleDropDown}
        className="UserMenu"
        ref={this.containerRef}
      >
        <Avatar image={avatar} />
        <span className="UserName">Bob Ross</span>
        {isDropDownOpen && <DropDown />}
      </div>
    );
  }
}

export default UserMenu;
