import React, { Component, createRef } from 'react';

class Modal extends Component {
  containerRef = createRef();

  state = {};

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
