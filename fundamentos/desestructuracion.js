const deedpool = {
	nombre: 'Wade',
	apellido: 'winston',
	poder: 'regeneracion',
	edad: 40,
	getNombre(){
		return `${this.nombre} ${this.apellido} ${this.poder}`
	}
}
//console.log(deedpool.getNombre());
//const nombre = deedpool.nombre;
//const apellido = deedpool.apellido;
//const poder = deedpool.poder;
//const {nombre, apellido, poder, edad = 0} = deedpool;
//console.log(nombre, apellido, poder, edad );
function imprimeHeroe(herue){
	const {nombre, apellido, poder, edad = 0} = herue;
	console.log(nombre, apellido, poder, edad );
}
imprimeHeroe(deedpool);
const heroes = [, 'superman', 'batman'];
//const h1 = heroes[0];
const [h1,h2,h3] = heroes;
console.log(h2);
