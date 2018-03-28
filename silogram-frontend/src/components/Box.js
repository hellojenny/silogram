import React, { Component } from 'react';
import './Box.css';

class Box extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };

    this._handleTextChange = this._handleTextChange.bind(this);
    this._selectBox = this._selectBox.bind(this);
  }

  _handleTextChange(event) {
    this.setState({ value: event.target.value });
  }

  _selectBox(e) {
    // pass itself into Slide.js and store as selectedObject
    this.props.onSelect(this.props.index);
  }

  componentWillMount() {
    // this.app is undefined
  }

  componentDidMount() {
    this.box.addEventListener('click', this._selectBox);
  }

  componentWillUnmount() {
    this.box.removeEventListener('click', this._selectBox);
  }

  render() {
    return (
      <div
        ref={box => { this.box = box; }}
        className="box"
        style={{position: 'absolute', top: this.props.pos.y+'px', left: this.props.pos.x+'px' }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Box;
