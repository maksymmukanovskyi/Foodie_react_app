import React, { Component } from 'react';

class Modal extends Component {
  state = {};

  render() {
    const { onClose } = this.props;
    return (
      <div className="Backdrop">
        <div className="ModalWindow">
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
