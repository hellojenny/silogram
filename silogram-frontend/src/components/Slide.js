import React, { Component } from 'react';
import './Slide.css';
import 'draft-js/dist/Draft.css';

import RightClickMenu from './RightClickMenu';
import Box from './Box';
import BoxEditor from '../containers/BoxEditor';
import {Editor, EditorState, RichUtils} from 'draft-js';

class Slide extends Component {

  constructor(props) {
    super(props);

    this._slideRightClick = this._slideRightClick.bind(this);
    this._addBox = this._addBox.bind(this);
    this._addImage = this._addImage.bind(this);
    this._hideMenu = this._hideMenu.bind(this);
    this._renderObject = this._renderObject.bind(this);
    this._setSelectedObject = this._setSelectedObject.bind(this);

    this.state = {
      rightClickMenuVisible: false,
      cursor: { x: 0, y: 0 },
      backgroundColor: '#eee',
      rightClickMenu: [
        { title: 'Add a text box',
          callback: this._addBox,
          key: 'box' },
        { title: 'Add an image',
          callback: this._addImage,
          key: 'image' },
      ],
      objects: [],
      selectedObject: null,
      iterator: 0,
    };
  }

  _setSelectedObject(i) {
    this.setState({ selectedObject: i});
    console.log("set selected object: "+ i)
  }

  _slideRightClick(event) {
    event.preventDefault();
    this.setState({ rightClickMenuVisible: true, cursor: { x: event.clientX, y: event.clientY } });
    // console.log(event);
  }

  _addBox() {
    console.log('im supposed to add a txtbox', );
    this.setState({
      objects: [...this.state.objects, {
        type: 'box',
        key: this.state.iterator.toString(),
        pos: this.state.cursor,
        editorState: EditorState.createEmpty(),
       }],
      iterator: this.state.iterator + 1,
     });
  }

  _addImage() {
    console.log('im supposed to add an image');
    this.setState({
      objects: [...this.state.objects, {
        type: 'image',
        key: this.state.iterator.toString(),
        pos: this.state.cursor,
       }],
      iterator: this.state.iterator + 1,
    });
  }

  _hideMenu() {
    this.setState( {rightClickMenuVisible : false} );
  }

  // _colorChangeHandler() {
  //   // this.setState({ newsfeed: [...this.state.newsfeed, 'something'] });
  //   // this.setState({ newsfeed: this.state.newsfeed.concat(['something']) });
  // }

  componentWillMount() {
    // this.app is undefined
  }

  componentDidMount() {
    this.slide.addEventListener('contextmenu', this._slideRightClick);
  }

  componentWillUnmount() {
    // this.app.removeeventlistner
  }

  // _onChangeEditor(editorState, i) {
  //   let newObjects = this.state.objects;
  //   newObjects[i].editorState = editorState;
  //   return this.setState({ objects: newObjects });
  // }

// _handleKeyCommand(command, editorState, i) {
//     const newState = RichUtils.handleKeyCommand(editorState, command);
//     if (newState) {
//       this._onChangeEditor(newState, i);
//       return 'handled';
//     }
//     return 'not-handled';
// }

  // _onBoldClick(i) {
  //   this.onChangeEditor(RichUtils.toggleInlineStyle(editorState, 'BOLD'), i);
  // }

  _renderObject(item, i) {
    switch (item.type) {
      case 'box': {
        return <Box index={i} onSelect={this._setSelectedObject} key={item.key} pos={item.pos}>
          <BoxEditor
            editorState={item.editorState}
          />
        </Box>;
        // return <Textbox key={item.key} pos={item.pos} />;
      }
      case 'image': {
        // return <Image />;
      }
    }
  }

  render() {
    return (
      <div>
        {/* <BoxEditor /> */}

        <div onClick={this._hideMenu} ref={slide => { this.slide = slide; }} className="slide" style={{background: this.state.backgroundColor }}>
          {this.state.objects.map(this._renderObject)}
          {this.state.rightClickMenuVisible ? <RightClickMenu contextMenuItems={this.state.rightClickMenu} pos={this.state.cursor} /> : null}
        </div>
      </div>
    );
  }
}

export default Slide;
