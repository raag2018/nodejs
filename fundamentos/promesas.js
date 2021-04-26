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
			if(empleado){
				resolve(empleado.nombre);
				//return empleado;
			}else{
				reject(`Empleado con id ${id} no existe`);
				//return `Empleado con id ${id} no existe`;
			}
	});
	return promesa;
}
const id = 2;
getEmpleado(id)
	.then(empleado => console.log(empleado))
	.catch(err => console.log(err));