import React, { Component } from 'react';
import Header from './header';
import Content from './content';
import ToggleButton from './toggleButton';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <ToggleButton />
      </div>
    );
  }
}

export default App;
