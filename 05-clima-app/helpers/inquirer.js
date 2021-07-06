require('colors');
const inquirer = require('inquirer');
const preguntas = [
	{
		"type": 'list',
		"name": 'opcion',
		"message": 'Que desea hacer?',
		"choices": [	 
					{value: 1,name:`${'1.'.blue}  Buscar  `},
					{value: 2,name:`${'2.'.blue}  Historial `},
					{value: 0,name:`${'3.'.blue}  Salir`}
				]
	}
];

const inquirerMenu = async() => {
	console.clear();
	let msg = '';
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
const listarLugar = async(lugares = []) => {
	const choices = lugares.map((lugar, i) => {
		const idx = `${i + 1}.`.green;
		return {
			value: lugar.id,
			name: `${idx} ${lugar.nombre}`
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
			message: 'Seleccione Legar',
			choices
		}
	]
	const {id} = await inquirer.prompt(preguntas);
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
			checked: (tarea.completadoEn) ? true : false
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
	listarLugar,
	confirmar,
	mostrarListadoChecklist
}