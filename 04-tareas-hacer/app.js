require('colors');
//const {mostrarMenu, pausa} = require('./helpers/mensajes');
const {inquirerMenu, pausa, leerInput, listadoTareasBorrar} = require('./helpers/inquirer');
const {guardarDB, leerDB} = require('./helpers/guardarArchivo');
const Tareas = require('./models/tareas');
console.clear();
const main = async() => {
	let opt = '';
	const tareas = new Tareas();
	const tareasDB = leerDB();
	if(tareasDB){
		//establecer las tareas

		tareas.cargarTareasFromArray(tareasDB);
		//const list = tareas.setTareas(tareasDB);
		//console.log("listado: ",list);
	}
	//if(opt !== '0' ) await pausa();
	do{
		opt = await inquirerMenu();		
		switch(opt){
			case '1':
				const desc = await leerInput('Descripcion: ');
				tareas.crearTarea(desc);
			break;
			case '2':
				tareas.listadoCompleto();
				//console.log(tareas.listadoArr);
			break;
			case '3':
				tareas.listarPendientesCompletadas(true);
			break;
			case '4':
				tareas.listarPendientesCompletadas(false);
			break;
			case '6':
				const id = await listadoTareasBorrar(tareas.listadoArr);
				//Preguntar si desea eliminar
				console.log({id});
			break;

		}
		//const tarea = new Tarea('bye food');
		//tareas._listado[tarea.id] = tarea;
		//console.log(tareas);
		guardarDB(tareas.listadoArr);
		await pausa();
	}while(opt !== '0');
}
main();