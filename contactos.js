//Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
//Crea una función para añadir un nuevo contacto a una lista
//Crea una función para borrar un contacto existente de la lista
//Crea una función para imprimir en consola los contactos presentes en la lista

//se crea una lista de contactos con datos predefinidos
const listadecontactos = [
  "Maria Garcia",
  "Juan Porras",
  "Adriana Corredor",
  "Susana Guzman",
  "Oscar Carrillo",
];

//Funcion para añadir un nuevo contacto a la lista

function agregarcontacto(nombrecompleto) {
  const index = listadecontactos.indexOf(nombrecompleto);
  if (index !== +1) {
    listadecontactos.push(nombrecompleto);
  }
}

//Funcion para borrar un contacto existente de la lista
function borrarcontacto(nombrecompleto) {
  const index = listadecontactos.indexOf(nombrecompleto);
  if (index !== -1) {
    listadecontactos.splice(index, 1);
  }
}

//Funcion para imprimir en consola los contactos presentes en la lista
function imprimircontactos() {
  console.log("lista de contactos:");
  for (const contacto of listadecontactos) {
    console.log(contacto);
  }
}

//borrarcontacto("Maria Garcia");
//imprimircontactos();

agregarcontacto("Nestor Aguas");
imprimircontactos();
