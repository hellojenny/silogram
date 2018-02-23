import React, { Component } from 'react';
// import './Content.css';

import Slide from './components/Slide';

class Content extends Component {

  constructor(props) {
    super(props);

    this._addSlide = this._addSlide.bind(this);

    this.state = {
      slides: [],
      iterator: 0,
    };

  }

  _addSlide() {
    console.log('this gon add slide');
    this.setState({
      slides: [...this.state.slides, {
        type: 'slide',
        key: this.state.iterator.toString(),
        pos: this.state.cursor,
       }],
      iterator: this.state.iterator + 1,
     });
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div id="content">
        {this.state.slides.map(function (item) {
          switch (item.type) {
            case 'slide': {
              return <Slide />;
            }
          }
        })}
  			<button onClick={this._addSlide}>New Slide?</button>
  		</div>
    );
  }
}

export default Content;
