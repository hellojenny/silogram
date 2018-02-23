import React, { Component } from 'react';
// import './Textbox.css';

class BoxEditor extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };

    this._handleTextChange = this._handleTextChange.bind(this);
  }

  _handleTextChange(event) {
    this.setState({ value: event.target.value });
  }


  componentWillMount() {
    // this.app is undefined
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    // this.app.removeeventlistner
  }

  render() {
    return (
      <div>
        DSFJLSDJFK
      </div>
    );
  }
}

export default BoxEditor;
