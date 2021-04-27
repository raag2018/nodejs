const fs = require('fs');
let salida = '';
const crearArchivo = (base = 5) => {
	salida += '================================';
	salida += `	TABLA DEL `+ base ;
	salida += '================================';
	for (let i = 1; i <= 10; i++) {
		salida += `${base} x ${i} = ${base*i} \n`;
	}
	console.log(salida);
	//fs.writeFile(`tabla-${n}.txt`, salida, (err) => {
	//	if(err) throw err;
	//	console.log(`tabla del ${n} creado`);
	//});
	const promesa = new Promise((resolve, reject) => {
		(salida)
		? resolve(salida)
		: reject(`La multiplicacion no se pudo realizar`);
	});
	return promesa;
}
const getMultiplicacion = async(base) => {
	try{
		const multiplicacion = await getMultiplicacion(base);
		fs.writeFileSync(`tabla-${base}.txt`, salida);
		console.log(`tabla del ${base} creado`);
	}catch(err){
		return err;
	}
}
module.exports = {
	getMultiplicacion
}