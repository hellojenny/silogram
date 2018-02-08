import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';

import Slide from './Slide';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
	<Router>
		<div id="content">
			<Slide />
		</div>
	</Router>,
	document.getElementById('root')
);

registerServiceWorker();
