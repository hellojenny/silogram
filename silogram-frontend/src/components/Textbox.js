import React, { Component } from 'react';
// import './Textbox.css';

class Textbox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this._handleTextChange = this._handleTextChange.bind(this);
  }

  componentWillMount() {
    // this.app is undefined
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    // this.app.removeeventlistner
  }

  _handleTextChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="textbox">
        <input type="text" value={this.state.value} onChange={this._handleTextChange}/>
        {this.state.value}
      </div>
    );
  }
}

export default Textbox;
