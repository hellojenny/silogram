// SiloService.js

import axios from 'axios';

class SiloService {
	sendData(data) {
		axios.post('http://localhost:4200/items/add-post', {
			item: data
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
	}
}

export default SiloService;