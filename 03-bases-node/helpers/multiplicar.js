const fs = require('fs');
const crearArchivo = async(base = 5) => {
	let salida = '';
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
	try{
		fs.writeFileSync(`tabla-${base}.txt`, salida);
		return `tabla del ${base} creado`;
	}catch(err){
		return err;
	}
}
module.exports = {
	crearArchivo
}