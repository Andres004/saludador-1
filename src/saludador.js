function saludar(nombre,hora,genero,edad) 
{
  let saludo = " ";
  if (hora >= 6 && hora < 12) {
    saludo = "Buen día";
  } else if (hora >= 12 && hora < 18) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  let titulo = " ";
  if(edad>30)
  {
  if (genero === "masculino") {
    titulo = "Sr.";
  } else if (genero === "femenino") {
    titulo = "Sra.";
  }
  }

  if(nombre){
    return saludo + " " + titulo + " " + nombre;
  }
  return saludo;
}

export default saludar;