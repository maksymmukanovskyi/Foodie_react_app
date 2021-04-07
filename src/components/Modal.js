import React, { Component, createRef } from 'react';

class Modal extends Component {
  containerRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.keyPressHandler);
  }

  shouldComponentUpdate(nextProps) {
    const { isModalOpen } = this.props;
    return nextProps.isModalOpen !== isModalOpen;
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyPressHandler);
  }

  keyPressHandler = e => {
    const { onClose } = this.props;
    return e.key === 'Escape' ? onClose() : null;
  };

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
