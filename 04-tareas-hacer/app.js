require('colors');
//const {mostrarMenu, pausa} = require('./helpers/mensajes');
const {inquirerMenu, pausa, leerInput} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
console.clear();
const main = async() => {
	console.log('hello world');
	let opt = '';
	const tareas = new Tareas();
	do{
		opt = await inquirerMenu();
		console.log({opt},'\n');		
		switch(opt){
			case '1':
				const desc = await leerInput('Descripcion: ');
				tareas.crearTarea(desc);
			break;
			case '2':
				console.log(tareas._listado);
			break;

		}
		//const tarea = new Tarea('bye food');
		//tareas._listado[tarea.id] = tarea;
		//console.log(tareas);
		if(opt !== '0' ) await pausa();
	}while(opt !== '0');
}
main();