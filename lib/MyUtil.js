import Constants from './Constants';
var util = {
	loadList : function(fn) {
		console.log('MyUtil loadList fetching ' + Constants.API_URL);
		
		fetch(Constants.API_URL, {
		  method: 'GET',
		  headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		  }
		})
		.then((response) => response.json())
		.then((responseJson) => {
			var json = responseJson;
			fn(json)
		});
		console.log('after fetch')
	}
}

export default util