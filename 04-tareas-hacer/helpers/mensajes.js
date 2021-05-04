require('colors');
let msg;
const mostrarMenu = () => {
	return new Promise(resolve => {
		console.clear();
		msg += '\n';
		msg += "====================================== \n".green;
		msg += '	Seleccione una opcion \n'.green;
		msg += '====================================== \n'.green;
		msg += `${'1.'.green} Crear Tareas \n`;
		msg += `${'2.'.green} Listar Tareas \n`;
		msg += `${'3.'.green} Listar tareas completadas \n`;
		msg += `${'4.'.green} Listar tareas pendientes \n`;
		msg += `${'5.'.green} Completar tarea(s) \n`;
		msg += `${'6.'.green} Borrar tarea \n`;
		msg += `${'0.'.green} Salir \n`;
		console.log(msg);
		const readLine = require('readline').createInterface({
			input: process.stdin,
			output: process.stdout
		});
		readLine.question('Seleccione una opcion: ', (opt) => {
			//console.log({opt});
			readLine.close();
			resolve(opt);
		});		
	});
}
const pausa = () => {
	return new Promise(resolve => {
		const readLine = require('readline').createInterface({
			input: process.stdin,
			output: process.stdout
		});
		readLine.question(`\nPresione ${'ENTER'.green} para continuar:\n `, (opt) => {
			readLine.close();
			resolve();
		});
	});
}
module.exports = {mostrarMenu, pausa}