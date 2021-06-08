const Tarea = require('./tarea');
class Tareas{
	_listado = {};
	construct(){
		this._listado = {};
	}
	borrarTarea(id = ''){
		//console.log(id.id);
		//console.log(this._listado['9dcd5b00-a85d-47a4-aaca-b4775618890f']);
		if(this._listado.hasOwnProperty(id.id)){
			delete this._listado[id.id];
		}
	}
	crearTarea(desc = ''){
		const tarea = new Tarea(desc);
		this._listado[tarea.id] = tarea;
	}
	get listadoArr(){
		const listado = [];
		Object.keys(this._listado).forEach(key => {
			const tarea = this._listado[key];
			listado.push(tarea);
		});
		return listado;
	}
	cargarTareasFromArray(tareas = []){
		tareas.forEach(tarea => {
			this._listado[tarea.id] = tarea;
		});
	}
	listadoCompleto(){
		console.log();
		/*
			numeros en verde
			completado en verde
			pendiente en rojo
			listado en numero
			let salida = '';
		let i = 1;
		let completado;
		Object.keys(this._listado).forEach(key => {
			const tarea = this._listado[key];
			completado = tarea.completadoEn;
			if(completado !== null){
				completado = `${'Completado'.green}`;
			}else{
				completado = `${'Pendiente'.red}`; 
			}
			if(tarea.desc){
				i++;
			}
			salida += `${`${i}`.green} ${tarea.desc} :: ${completado} \n`;
		});
		console.log(salida);
		*/
		this.listadoArr.forEach((tarea, i) => {
				const idx = `${i + 1}`.green;
				const {desc, completadoEn} = tarea;
				const estado = (completadoEn)
								? 'Completado'.green
								: 'Pendiente'.red;
				console.log(`${idx} ${desc} :: ${estado}`);
		}); 
	}
	listarPendientesCompletadas(completadas = true){
		console.log();
		let contador = 0;
		this.listadoArr.forEach((tarea) => {
				const {desc, completadoEn} = tarea;
				const estado = (completadoEn)
								? 'Completado'.green
								: 'Pendiente'.red;
				if(completadas){
					if(completadoEn){
										contador += 1;
										console.log(`${(contador + ".").green} ${desc} :: ${completadoEn}`);
					}
				}else{
					if(!completadoEn){
										contador += 1;
										console.log(`${(contador + ".").green} ${desc} :: ${estado}`);
					}
				}
				
		}); 
	}
}
module.exports = Tareas;