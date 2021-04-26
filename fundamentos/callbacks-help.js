const empleados = [
	{
		id: 1,
		nombre: 'Fernando'
	},
	{
		id: 2,
		nombre: 'linda'
	},
	{
		id: 3,
		nombre: 'kare'
	}
];
const salarios = [
	{
		id: 1,
		salario: 1000
	},
	{
		id: 2,
		salario: 1500
	}
];
const getEmpleado = (id, callback) => {
	const empleado = empleados.find((e) =>  e.id === id);
	if(empleado){
		callback(null, empleado.nombre);
		//return empleado;
	}else{
		callback(`Empleado con id ${id} no existe`);
		//return `Empleado con id ${id} no existe`;
	}
}
const getSalario = (id, callback) => {
	const salario = salarios.find((e) => e.id === id)/*?.salario*/;
	if (salario) {
		callback(null, salario.salario);
	} else {
		callback(`El salario del id ${id} no existe`);
	}
}
const id = 1;
getEmpleado(id, (err, empleado) => {
	if(err){
		console.log('ERROR');
		return console.log(err);
	}
	getSalario(id, (err, salario) => {
	if (err) {
		console.log('error de salario');
		return console.log(err);
	} 
	//console.log('Salario');
	console.log('El empleado: ', empleado, 'tiene un salario de: ', salario);
});
	//console.log('Empleado');
	//console.log(empleado.nombre);
});

//console.log(getEmpleado(1));