require('colors');
//const {mostrarMenu, pausa} = require('./helpers/mensajes');
const {inquirerMenu, pausa, leerInput, 
		listadoTareasBorrar, confirmar,
		mostrarListadoChecklist} = require('./helpers/inquirer');
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
			case '5':
				const ids = await mostrarListadoChecklist(tareas.listadoArr);
				//console.log(ids);
				tareas.toggleCompletadas(ids);
			break;
			case '6':
				const id = await listadoTareasBorrar(tareas.listadoArr);
				//console.log(id);
				//Preguntar si desea eliminar
				if( id.id !== '0'){
					const ok = await confirmar('Esta seguro de eliminar?');
					if(ok){
						tareas.borrarTarea(id);
						console.log('Tarea Borrada');
					}
				}
				
				//console.log({ok});
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