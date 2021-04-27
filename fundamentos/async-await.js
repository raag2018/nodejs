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

const getInfoUsuario = async(id) => {
	const empleado = await getEmpleado(id);
	const salario = await getSalario(id);
	return `El salario del empleado: ${empleado} es de ${salario}`;
}
const id = 1;
getInfoUsuario(id)
	.then(msg => console.log(msg));

