setTimeout(function () {
	console.log('hola mundo');
},2000);
const getUsuario = (id, callback) => {
	const usuario = {
		id, 
		nombre: 'robert'
	}
	setTimeout(() => {
		callback(usuario);
	}, 1500)
}
getUsuario(10, (usuario) => {
	console.log(usuario.id);
	console.log(usuario.nombre.toUpperCase());
});