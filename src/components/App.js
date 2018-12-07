import React, { Component } from 'react';
import Button from '../containers/Button';
import NewsItem from '../containers/NewsItem';
import Loading from '../containers/Loading';

class App extends Component {
  render() {
    return (
        <div>
            <Button />
            <Loading />
            <NewsItem />
        </div>
    );
  }
}

export default App;
