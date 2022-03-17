const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, limite = 10) => {
  const barra = "============";

  let salida = "";

  for (let i = 1; i < limite + 1; i++) {
    salida += `${base} x ${i} = ${base * i}\n`;
  }

  if (listar) {
    console.log(barra.green);
    console.log("Tabla del", colors.blue(base));
    console.log(barra.green);
    console.log(salida);
  }

  fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

  return `tabla-${base}.txt`;
};

module.exports = {
  crearArchivo,
};
