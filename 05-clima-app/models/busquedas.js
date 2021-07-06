const fs = require('fs');
require('dotenv').config();
const axios = require('axios');
class Busquedas{
	historial = [];
	dbPath = './db/databases.json';
	constructor(){
		//leer db si existe
		this.leerDB();
	}
	get historialCapitalizado(){
		//return this.historial.map(hist => hist.replace(/^\w\S*/g, (h) => (h.replace(/^\w/, (c) => c.toLocaleUpperCase()))));
		return this.historial.map(lugar => {
			let palabras = lugar.split(' ');
			palabras = palabras.map(p => p[0].toUpperCase() + p.substring(1));
			return palabras.join(' ');
		});
	}
	get paramsMapbox(){
		return {
					'access_token': process.env.MAPBOX_KEY,
					'limit': 5,
					'language': 'es'
				}
	} 
	get paramOpenWeather(){
		return {
			'units': 'metric',
			'lang': 'es',
			'appid': process.env.OPENWEATHER_KEY
		}
	}
	async ciudad(lugar = ''){
		try{
			const instance = axios.create({
				baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
				params: this.paramsMapbox
			});
			const resp = await instance.get();
			return resp.data.features.map(lugar => ({
				id: lugar.id,
				nombre: lugar.place_name,
				lng: lugar.center[0],
				lat: lugar.center[1]
			})); 
		}catch(error){
			return [];
		}
	}
	async climaLugar(lat, lon){
		try{
			//instancia de axios
			const instance = axios.create({
				//?lat=${lat}&lon=${lon}
				baseURL: `https://api.openweathermap.org/data/2.5/weather`,
				//params: this.paramOpenWeather
				params: {...this.paramOpenWeather, lat, lon}
			});
			const resp = await instance.get();
			/*let desc = resp.data.weather[0];
			const main = resp.data.main;*/
			const {weather, main} = resp.data;
			//resp.data
			return {
				desc: weather[0].description,
				temp: main.temp,
				min: main.temp_min,
				max: main.temp_max
			}
		}catch(error){
			console.log(error);
		}
	}
	agregarHistorial(lugar = ''){
		//prevenir duplicado
		if(this.historial.includes(lugar.toLocaleLowerCase())){
			return;
		}
		this.historial = this.historial.splice(0,5);
		this.historial.unshift(lugar.toLocaleLowerCase());
		//grabar en base de datos
		this.guardarDB();
	}
	guardarDB(){
		const payLoad = {
			historial: this.historial
		}
		fs.writeFileSync(this.dbPath, JSON.stringify(payLoad));
	}
	leerDB(){
		if(!fs.existsSync(this.dbPath)){
			return null;
		}
		const info = fs.readFileSync(this.dbPath, {encoding: 'utf-8'});
		//debe de existir
		const data = JSON.parse(info);
		this.historial = data.historial;
	}
}
module.exports = Busquedas;