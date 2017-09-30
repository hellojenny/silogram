// AddSilo.js

import React, { Component } from 'react';
import SiloService from './SiloService';

class AddSilo extends Component {

	constructor(props) {
		super(props);
		this.state = {value: ''}; // initially set to null
		this.addSiloService = new SiloService();

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		alert(this.state.value);
		this.addSiloService.sendData(this.state.value);
		this.props.history.push('/');
		// event.preventDefault();
	}

	render() {
		return (
			<div>
			<h2>Tryna add a silo?</h2>

			<form onSubmit={this.handleSubmit}>
				<label>Add Item:
					<input type="text" value={this.state.value} onChange={this.handleChange} />
				</label><br />
				<input type="submit" value="Submit" />
			</form>
			</div>
		);
	}
}

export default AddSilo;