import React, { Component, createRef } from 'react';

class Modal extends Component {
  containerRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKey);
  }

  handleKey = e => {
    console.log(e.keyCode === 27);
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   const { isModalOpen } = this.state;
  //   return nextState.isModalOpen !== isModalOpen;
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('onKeyPress', this.handleWindowClick);
  // }

  render() {
    const { onClose, onModalClick } = this.props;

    return (
      <div
        className="Backdrop"
        onClick={e => onModalClick(e, this.containerRef.current)}
      >
        <div className="ModalWindow" ref={this.containerRef}>
          <p>Some content of modal window)</p>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
