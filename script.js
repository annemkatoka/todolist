let contenedor = document.getElementById("contenedor");

const agregarTarea = (e) => {
  e.preventDefault();
  //console.log("event", e);
  //console.log("Valor", e.target.tarea.value);
  const nombreTarea = e.target.tarea.value;
  const elementoDeLaLista = document.createElement("li");
  elementoDeLaLista.textContent = nombreTarea;
  console.log("elementoDeLaLista", elementoDeLaLista);

  contenedor.prepend(elementoDeLaLista);
  e.target.reset();
};

const limpiar = (e) => {
  contenedor.innerHTML = "";
};
