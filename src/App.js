import React, { Component } from 'react';
import { getArticlesByQuery } from './Api';
import ArticleList from './ArticleList';

export default class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    getArticlesByQuery('react')
      .then(arr =>
        this.setState({
          articles: arr,
          isLoading: false,
        }),
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { articles, isLoading, error } = this.state;

    return (
      <div>
        {error && <p>{error.message}</p>}
        {isLoading && <p>Loading</p>}
        {articles.length > 0 && <ArticleList items={articles} />}
      </div>
    );
  }
}
