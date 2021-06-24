const axios = require('axios');
class Busquedas{
	historial = ['Tegucigalpa', 'Madrid', 'San Jose'];
	constructor(){
		//leer db si existe
	}
	async ciudad(lugar = ''){
		try{
			//peticion http
			//console.log('Ciudad',lugar);
			const res = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/san%20salvador.json?access_token=pk.eyJ1IjoiYW50b255YWxmZXJlcyIsImEiOiJja3FiYmEzN2MwMGdnMnJsNDZ4cWlpbm90In0.NTpMu3yz2KCKcB6zLtIo9w&limit=5&language=es');
			console.log(res.data);
			return []; 
		}catch(error){
			return [];
		}
		
	}
}
module.exports = Busquedas;