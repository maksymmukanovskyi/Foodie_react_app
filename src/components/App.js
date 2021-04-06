import React, { Component } from 'react';
import AppHeader from './AppHeader';
import Modal from './Modal';

class App extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  handleWindowClick = (e, ref) => {
    const isTargetInsideContainer = ref.contains(e.target);
    const { isModalOpen } = this.state;
    if (!isTargetInsideContainer && isModalOpen) {
      this.closeModal();
    }
  };

  render() {
    const { isModalOpen } = this.state;
    console.log('RENDER');

    return (
      <div>
        <AppHeader />
        <button type="button" onClick={this.openModal}>
          Open modal!
        </button>
        {isModalOpen && (
          <Modal
            onModalClick={this.handleWindowClick}
            onClose={this.closeModal}
          />
        )}
      </div>
    );
  }
}

export default App;
