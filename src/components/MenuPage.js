import React, { Component } from 'react';
import * as Api from '../services/api';
import MenuGrid from './MenuGrid';

class MenuPage extends Component {
  state = {};

  componentDidMount() {
    Api.getAllMenuItems();
  }

  render() {
    return <MenuGrid items={[]} />;
  }
}

export default MenuPage;
