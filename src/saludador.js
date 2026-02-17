function saludar(nombre,hora) 
{
  let saludo = "Hola";
  if (hora >= 6 && hora < 12) {
    saludo = "Buen día";
  } else if (hora >= 12 && hora < 18) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }
  if(nombre){
    return "Hola " + " "+ nombre;
  }
  return "Hola";
}

export default saludar;