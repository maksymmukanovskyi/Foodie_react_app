import React, { Component, createRef } from 'react';
import DropDown from './DropDown';
import Avatar from './Avatar';
// import avatar from '../avatar.jpg';

class UserMenu extends Component {
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

  openDropDown = () => {
    this.setState({
      isDropDownOpen: true,
    });
  };

  closeDropDown = () => {
    this.setState({
      isDropDownOpen: false,
    });
  };

  handleWindowClick = e => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );

    const { isDropDownOpen } = this.state;
    if (!isTargetInsideContainer && isDropDownOpen) {
      this.closeDropDown();
    }
  };

  render() {
    const { isDropDownOpen } = this.state;
    const { name, avatar } = this.props;
    return (
      <div
        onKeyDown={this.toggleDropDown}
        onClick={this.openDropDown}
        className="UserMenu"
        ref={this.containerRef}
      >
        <Avatar image={avatar} />
        <span className="UserName">{name}</span>
        {isDropDownOpen && <DropDown />}
      </div>
    );
  }
}

export default UserMenu;
