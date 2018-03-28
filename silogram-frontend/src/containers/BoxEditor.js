import React, { Component } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
// import './Textbox.css';

const styleMap = {
  'STRIKETHROUGH': {
    textDecoration: 'line-through',
  },
};

class BoxEditor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty(),
      selectedObject: null
    };
    this.onChange = (editorState) => this.setState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);

    this._onBoldClick = this._onBoldClick.bind(this);
    this._onItalicClick = this._onItalicClick.bind(this);
    this._onUnderlineClick = this._onUnderlineClick.bind(this);
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  _onItalicClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
  }

  _onUnderlineClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
  }

  _onStrikethoughClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'STRIKETHROUGH'));
  }

  _onFontChangeClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'STRIKETHROUGH'));
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
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
        <div className="toolbox">
          <div className="icon bold" onClick={this._onBoldClick.bind(this)}>B</div>
          <div className="icon italic" onClick={this._onItalicClick.bind(this)}>I</div>
          <div className="icon underline" onClick={this._onUnderlineClick.bind(this)}>U</div>
          <div className="icon strikethrough" onClick={this._onStrikethoughClick.bind(this)}>S</div>
        </div>
      <Editor
        editorState={this.state.editorState}
        customStyleMap={styleMap}
        handleKeyCommand={this.handleKeyCommand}
        onChange={this.onChange} />
      </div>
    );
  }
}

export default BoxEditor;
