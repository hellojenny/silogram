// AddItem.js

import React, { Component } from 'react';
import ItemService from './ItemService';

class AddItem extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.addSlideService = new ItemService();

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
      this.addSlideService.sendData(this.state.value);
      this.props.history.push('/');
    }

  render() {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Add an Item:
              <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </label><br/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
    );
  }
}

export default AddItem;
