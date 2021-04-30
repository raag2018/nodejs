const fs = require('fs');
const colors = require('../node_modules/colors');
const crearArchivo = async(base = 5, l = false, h = 10) => {
	let salida = '';
	salida += '================================ \n'.green;
	salida += `	TABLA DEL `.green + colors.blue(base) + '\n';
	salida += '================================ \n'.green;
	for (let i = 1; i <= h; i++) {
		salida += `	${colors.blue(base)} ${'x'.green} ${i} ${' ='.green} ${(base*i)} \n`;
	}
	if(l){
		console.log(salida);
	}
	//fs.writeFile(`tabla-${n}.txt`, salida, (err) => {
	//	if(err) throw err;
	//	console.log(`tabla del ${n} creado`);
	//});
	try{
		fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
		return `tabla del ${base} creado`;
	}catch(err){
		throw err;
	}
}
module.exports = {
	crearArchivo
}