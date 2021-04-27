const fs = require('fs');
const crearArchivo = (base = 5){
	console.log('================================');
	console.log(`	TABLA DEL `, base );
	console.log('================================');
	let salida = '';
	for (let i = 1; i <= 10; i++) {
		salida += `${base} x ${i} = ${n*i} \n`;
	}
	console.log(salida);
	//fs.writeFile(`tabla-${n}.txt`, salida, (err) => {
	//	if(err) throw err;
	//	console.log(`tabla del ${n} creado`);
	//});
	try{
		fs.writeFileSync(`tabla-${base}.txt`, salida);
		console.log(`tabla del ${base} creado`);
	}catch(err){
		return err;
	}
}
module.exports = {
	crearArchivo
}