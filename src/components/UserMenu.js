import React, { Component, createRef } from 'react';
import DropDown from './DropDown';
import Avatar from './Avatar';
import avatar from '../avatar.jpg';

export default class UserMenu extends Component {
  containerRef = createRef();

  state = {
    isDropDownOpen: false,
  };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isDropDownOpen } = this.state;
    return nextState.isDropDownOpen !== isDropDownOpen;
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = e => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );

    const { isDropDownOpen } = this.state;
    if (!isTargetInsideContainer && isDropDownOpen) {
      this.closeDropDown();
    }
  };

  openDropDown = () => {
    this.setState({ isDropDownOpen: true });
  };

  closeDropDown = () => {
    this.setState({ isDropDownOpen: false });
  };

  render() {
    const { isDropDownOpen } = this.state;
    console.log('render');

    return (
      <div
        onClick={this.openDropDown}
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
