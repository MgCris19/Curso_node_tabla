const fs = require('fs');
const crearArchivo = async(base,l,h) => {
  try{
  let i = 1;
  let salida = "";
  //return new Promise(( resolve, reject ) => {
  while (i <= h) {
    salida += `${base} x ${i} = ${base * i}\n`;
    i++;
  }
  if(l){
  console.log(salida);
  }

  fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
  return(`tabla-${base}.txt`);
  }catch(err){
    throw err;
  }
};
module.exports = {
    crearArchivo
}