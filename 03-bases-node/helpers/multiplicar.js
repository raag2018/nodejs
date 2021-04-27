const fs = require('fs');
const crearArchivo = async(base = 5) => {
	let salida = '';
	salida += '================================ \n';
	salida += `	TABLA DEL `+ base + '\n';
	salida += '================================ \n';
	for (let i = 1; i <= 10; i++) {
		salida += `${base} x ${i} = ${base*i} \n`;
	}
	console.log(salida);

	//fs.writeFile(`tabla-${n}.txt`, salida, (err) => {
	//	if(err) throw err;
	//	console.log(`tabla del ${n} creado`);
	//});
	try{
		fs.writeFileSync(`tabla-${base}.txt`, salida);
		return `tabla del ${base} creado`;
	}catch(err){
		throw err;
	}
}
module.exports = {
	crearArchivo
}