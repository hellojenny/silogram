import React, { Component } from 'react';
import './Slide.css';

import RightClickMenu from './components/RightClickMenu';
import Textbox from './components/Textbox';

class Slide extends Component {

  constructor(props) {
    super(props);

    this._slideRightClick = this._slideRightClick.bind(this);
    this._addTextBox = this._addTextBox.bind(this);
    this._addImage = this._addImage.bind(this);
    this._hideMenu = this._hideMenu.bind(this);

    this.state = {
      rightClickMenuVisible: false,
      cursor: { x: 0, y: 0 },
      backgroundColor: '#ff8ba1',
      rightClickMenu: [
        { title: 'Add a text box',
          callback: this._addTextBox,
          key: 'textbox' },
        { title: 'Add an image',
          callback: this._addImage,
          key: 'image'  }
      ],
      objects: [],
      iterator: 0,
    };
  }

  _slideRightClick(event) {
    event.preventDefault();
    this.setState({ rightClickMenuVisible: true, cursor: { x: event.clientX, y: event.clientY } });
    // console.log(event);
  }

  _addTextBox() {
    console.log('im supposed to add a txtbox', );
    this.setState({
      objects: [...this.state.objects, { type: 'textbox', key: this.state.iterator.toString() }],
      iterator: this.state.iterator + 1,
     });
  }

  _addImage() {
    console.log('im supposed to add an image');
    this.setState({
      objects: [...this.state.objects, { type: 'image', key: this.state.iterator.toString() }],
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

  render() {
    return (
      <div onClick={this._hideMenu} ref={slide => { this.slide = slide; }} className="slide" style={{background: this.state.backgroundColor }}>
        {this.state.objects.map(function (item) {
          switch (item.type) {
            case 'textbox': {
              return <Textbox key={item.key} />;
            }
            case 'image': {
              // return <Image />;
            }
          }
        })}
        {this.state.rightClickMenuVisible ? <RightClickMenu contextMenuItems={this.state.rightClickMenu} pos={this.state.cursor} /> : null}
      </div>
    );
  }
}

export default Slide;
