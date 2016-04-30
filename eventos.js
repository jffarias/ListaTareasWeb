(function(){
  //variables
  var lista = document.getElementById("lista"),
      tareaInput = document.getElementById("tareaInput"),
      btnTarea = document.getElementById("btn-agregar");
  
  //funciones
  var agregarTarea = function(){
    //alert("Agregar tarea");
    var tarea = tareaInput.value,
        nuevaTarea = document.createElement("li"),
        enlace = document.createElement("a"),
        contenido = document.createTextNode(tarea);
    if (tarea === ""){
      tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
      tareaInput.className = "error";
      return false;
    }
    //Agregamos contenido a enlace
    enlace.appendChild(contenido);
    //se asignamos el atributo href
    enlace.setAttribute("href","#");
    nuevaTarea.appendChild(enlace);
    //por ultimo agregamos nueva tarea
    //a nuestra lista
    lista.appendChild(nuevaTarea);
    tareaInput.value = "";
    
    //borramos un elemto de la lista
    for(var j=0; j <= lista.children.length-1; j++){
      lista.children[j].addEventListener("click", function(){
        this.parentNode.removeChild(this)
      });
    }
  };
  
  //limpiar input de error
  var comprobarInput = function(){
   // alert("Comprobar input");
    tareaInput.className = "";
    tareaInput.setAttribute("placeholder", "Agrega nueva tarea");
  };
  
  //Eliminar una tarea
  var eliminarTarea = function(){
    //alert("Eliminar tarea");
    this.parentNode.removeChild(this);
  };
  //eventos
  //Agregar Tarea
  btnTarea.addEventListener("click", agregarTarea);
  //comprobar tarea
  tareaInput.addEventListener("click", comprobarInput)
  
  //borrando elementos de la lista
  for(var j=0; j <= lista.children.length-1; j++){
    lista.children[j].addEventListener("click", eliminarTarea);
  }
}());
