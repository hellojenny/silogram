import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import AddSilo from './components/AddSilo';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
	<Router>
		<div>
			<App />
			<Route path='/add-silo' component={AddSilo} />
		</div>
	</Router>,
	document.getElementById('root')
);

registerServiceWorker();
