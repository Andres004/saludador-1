function saludar(nombre,hora,genero,edad,idioma) 
{
  let saludo = " ";
  if(idioma === "espaniol")
  {
  if (hora >= 6 && hora < 12) {
    saludo = "Buen día";
  } else if (hora >= 12 && hora < 18) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }
  }
  else if (idioma === "ingles")
  {
   if (hora >= 6 && hora < 12) {
    saludo = "Good morning ";
  } else if (hora >= 12 && hora < 18) {
    saludo = "Good afternoon";
  } else {
    saludo = "Good night";
  }  
  }

  let titulo = " ";
  if(edad>30)
  {
  if(idioma === "espaniol")
  {
  if (genero === "masculino") {
    titulo = "Sr.";
  } 
  else if (genero === "femenino") {
    titulo = "Sra.";
  }
  }
  else if (idioma === "ingles")
  {
   if (genero === "masculino") {
    titulo = "Mr.";
  } 
  else if (genero === "femenino") {
    titulo = "Miss.";
  }  
  }
  }

  if(nombre){
    return saludo + " " + titulo + " " + nombre;
  }
  return saludo;
}

export default saludar;