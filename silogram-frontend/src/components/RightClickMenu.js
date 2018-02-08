import React, { Component } from 'react';
import './RightClickMenu.css';

class RightClickMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };

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
      <ul className="rightClickMenu" style={{top: this.props.pos.y+'px', left: this.props.pos.x+'px' }}>
        {this.props.contextMenuItems.map(function (item) { return <li key={item.key} onClick={item.callback}>{item.title}<br/></li>; })}
      </ul>
    );
  }
}

export default RightClickMenu;
