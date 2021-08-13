
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('yargs')
.option('b',{
  alias: 'base',
  type: 'number',
  demandOption: true,
  describe: 'Es la base dfe la tabla de multiplicar'
})
.option('l',{
  alias: 'listar',
  type: 'boolean',
  default: 'false',
  describe: 'Muestra la tabla en consola'
})
.option('h',{
  alias: 'hasta',
  type: 'number',
  default: 10,
  describe: 'el numero hasta donde quieres que se multiplique'
})
.check((argv, options)=>{
  if( isNaN(argv.b)){
    throw 'La base tiene que ser un numero';
  }else if(isNaN(argv.h)){
    throw 'El limite tiene que ser un numero';
  }
  return true;
})
.argv
//let base = 3;
crearArchivo(argv.b,argv.l,argv.h)
  .then((nombreArchivo) =>{
    return console.log(nombreArchivo,'creado')})
   .catch(err => console.log(err));
//console.log(argv);
