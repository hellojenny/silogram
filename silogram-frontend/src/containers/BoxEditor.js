import React, { Component } from 'react';
import {Editor, EditorState} from 'draft-js';
// import './Textbox.css';

class BoxEditor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = (editorState) => this.setState({editorState});

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
      <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    );
  }
}

export default BoxEditor;
