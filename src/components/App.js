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

  render() {
    const { isModalOpen } = this.state;
    return (
      <div>
        <AppHeader />
        <button type="button" onClick={this.openModal}>
          Open modal!
        </button>
        {isModalOpen && <Modal onClose={this.closeModal} />}
      </div>
    );
  }
}

export default App;
