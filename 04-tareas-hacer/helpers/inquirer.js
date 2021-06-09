require('colors');
const inquirer = require('inquirer');
const preguntas = [
	{
		"type": 'list',
		"name": 'opcion',
		"message": 'Que desea hacer?',
		"choices": [	 
					{value: '1',name:`${'1.'.blue}  Crear Tareas `},
					{value: '2',name:`${'2.'.blue}  Listar Tareas `},
					{value: '3',name:`${'3.'.blue}  Listar tareas completadas`},
					{value: '4',name:`${'4.'.blue}  Listar tareas pendientes`},
					{value: '5',name:`${'5.'.blue}  Completar tarea(s)`},
					{value: '6',name:`${'6.'.blue}  Borrar tarea`},
					{value: '0',name:`${'0.'.blue}  Salir`}
				]
	}
];
let msg = '';
const inquirerMenu = async() => {
	console.clear();
	msg += "====================================== \n".green;
	msg += '	Seleccione una opcion \n'.green;
	msg += '====================================== \n'.green;
	console.log(msg);
	const {opcion} = await inquirer.prompt(preguntas);
	return opcion;
}
const pausa = async() => {
	const question = [
		{
			type: 'input',
			name: 'enter',
			message: `Presione ${'ENTER'.green} para continuar`
		}
	];
	console.log('\n');
	await inquirer.prompt(question);
}
const leerInput = async() => {
	const question = [
		{
			type: 'input',
			name: 'desc',
			message: 'Descripcion',
			validate(value){
				if (value.length === 0) {
					return 'Por favor ingrese un valor';
				}
				return true;
			}
		}
	];
	const {desc} = await inquirer.prompt(question);
	return desc;
}
const listadoTareasBorrar = async(tareas = []) => {
	const choices = tareas.map((tarea, i) => {
		const idx = `${i + 1}.`.green;
		return {
			value: tarea.id,
			name: `${idx} ${tarea.desc}`
		}
	});
	choices.unshift({
		value: '0',
		name: '0.'.green + ' Cancelar.'
	})
	const preguntas = [
		{
			type: 'list',
			name: 'id',
			message: 'Borrar',
			choices
		}
	]
	const id = await inquirer.prompt(preguntas);
	return id;
}
const confirmar = async(message) =>{
	const question = {
		type: 'confirm',
		name: 'ok',
		message
	}
	const {ok} = await inquirer.prompt(question);
	return ok;
}

const mostrarListadoChecklist = async(tareas = []) => {
	const choices = tareas.map((tarea, i) => {
		const idx = `${i + 1}.`.green;
		return {
			value: tarea.id,
			name: `${idx} ${tarea.desc}`,
			checked: true
		}
	});
	const pregunta = [
		{
			type: 'checkbox',
			name: 'ids',
			message: 'Selecciones',
			choices
		}
	]
	const {ids} = await inquirer.prompt(pregunta);
	return ids;
}
module.exports = {
	inquirerMenu, 
	pausa,
	leerInput,
	listadoTareasBorrar,
	confirmar,
	mostrarListadoChecklist
}