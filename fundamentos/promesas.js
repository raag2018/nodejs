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
const getEmpleado = (id) => {
	
	const promesa = new Promise((resolve, reject) => {
		const empleado = empleados.find((e) =>  e.id === id);
			/*if(empleado){
				resolve(empleado.nombre);
			}else{
				reject(`Empleado con id ${id} no existe`);
			}
			IF TERNARIO
			*/
			(empleado)
			? resolve(empleado.nombre)
			: reject(`Empleado con id ${id} no existe`);
	});
	return promesa;
}
const getSalario = (id) => {
	const promesa = new Promise((resolve, reject) => {
		const salario = salarios.find((s) => s.id === id);
		(salario)
		? resolve(salario.salario)
		: reject(`El salario para el id ${id} no existe`);
	});
	return promesa;
}
const id = 3;
let nombre;
//getEmpleado(id)
//	.then(empleado => console.log(empleado))
//	.catch(err => console.log(err));
//getSalario(id)
//	.then(salario => console.log(salario))
//	.catch(err => console.log(err));
getEmpleado(id)
	.then(empleado => {
		nombre = empleado;
		return getSalario(id)
	})
	.then(salario => console.log('El empleado: ', nombre, ' tiene un salario de ',salario))
	.catch(err => console.log(err));