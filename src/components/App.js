import React, { Component } from 'react';
import { getArticlesByQuery } from '../services/Api';
import ArticleList from './ArticleList';
import CategorySelector from './CategorySelector';

const categorySelectorOptions = ['html', 'css', 'javascript', 'react'];

export default class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
    category: categorySelectorOptions[2],
  };

  componentDidMount() {
    const { category } = this.state;
    this.fetchDataOnChange(category);
  }

  componentDidUpdate(prevProps, prevState) {
    const prevCategory = prevState.category;
    const { category: nextCategory } = this.state;

    if (prevCategory !== nextCategory) {
      this.fetchDataOnChange(nextCategory);
    }
  }

  fetchDataOnChange = category => {
    this.setState({ isLoading: true });
    getArticlesByQuery(category)
      .then(arr =>
        this.setState({
          articles: arr,
          isLoading: false,
        }),
      )
      .catch(error => this.setState({ error, isLoading: false }));
  };

  handleCategoryChange = evt => {
    this.setState({ category: evt.target.value });
  };

  render() {
    const { articles, isLoading, error, category } = this.state;

    return (
      <div>
        <CategorySelector
          options={categorySelectorOptions}
          category={category}
          onChange={this.handleCategoryChange}
        />
        {error && <p>{error.message}</p>}
        {isLoading ? <p>Loading</p> : <ArticleList items={articles} />}
      </div>
    );
  }
}

