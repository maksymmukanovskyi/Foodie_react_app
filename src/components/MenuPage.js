import React, { Component } from 'react';
import * as API from '../services/api';
import MenuGrid from './MenuGrid';

class MenuPage extends Component {
  state = { menu: [] };

  //   onShowMoreInfo, onDelete

  componentDidMount() {
    API.getAllMenuItems().then(menu => {
      this.setState({
        menu,
      });
    });
  }

  handleDeleteItem = id => {
    API.deleteMenuItem(id).then(isOk => {
      if (!isOk) return;
      this.setState(state => ({
        menu: state.menu.filter(item => item.id !== id),
      }));
    });
  };

  handleShowMoreInfo = id => {
    API.getMenuItemById(id).then(item => console.log(item));
  };

  handleAddMenuItem = () => {
    const item = {
      name: `New Name ${Date.now()}`,
      price: Math.random(),
      image:
        'https://images.pexels.com/photos/35629/bing-cherries-ripe-red-fruit.jpg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640',
    };
    API.addMenuItem(item).then(newItem => {
      this.setState(state => ({
        menu: [...state.menu, newItem],
      }));
    });
  };

  render() {
    const { menu } = this.state;
    return (
      <div>
        <button type="button" onClick={this.handleAddMenuItem}>
          Add menu element
        </button>
        <MenuGrid
          items={menu}
          onDelete={this.handleDeleteItem}
          onShowMoreInfo={this.handleShowMoreInfo}
        />
      </div>
    );
  }
}

export default MenuPage;
