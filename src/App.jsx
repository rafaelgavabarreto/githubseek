import React, { Component } from 'react';
import Button from './components/Button.jsx';

class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    alert("Clicked!!");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Github Favorites</h1>
        </header>
        <p className="App-intro">
          What?!
        </p>
        <Button handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
