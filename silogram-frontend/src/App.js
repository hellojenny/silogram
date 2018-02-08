import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: 'Jenny\'s World',
      newsfeed: [],
    };

    this._onPressHandler = this._onPressHandler.bind(this);
  }

  _onPressHandler() {
    // this.setState({ newsfeed: [...this.state.newsfeed, 'something'] });
    this.setState({ newsfeed: this.state.newsfeed.concat(['something']) });
  }

  componentWillMount() {
    // this.app is undefined
  }

  componentDidMount() {
    // this.app.addeventlistner('right-click', this._appRightClickHandler)
  }

  componentWillUnmount() {
    // this.app.removeeventlistner
  }

  componentDidUnmount() {

  }

  render() {
    return (
      <div ref={app => { this.app = app; }} className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.title}</h1>
        </header>
        <p className="App-intro">
          <button onClick={this._onPressHandler}>Change Title</button>
          To get started, edit <code>src/App.js</code> and save to reload.
          <ul>
          {this.state.newsfeed.map(function (text) { return <span>text<br/></span>; })}
          </ul>
        </p>
      </div>
    );
  }
}

export default App;
