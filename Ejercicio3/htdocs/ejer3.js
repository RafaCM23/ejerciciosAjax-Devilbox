boton=document.getElementById("comprobar");
boton.addEventListener("click", comprobar);

input=document.getElementById("login");

lista=document.getElementById("lista");

function comprobar(){
  fetch('http://Ejercicio3.loc/compruebaDisponibilidadJSON.php')
  .then(response => response.json()) 
  .then(myData => {controlarRespuesta(myData)}) 
  .catch(err => console.error(err));
}


function controlarRespuesta(datos){
  
  if(datos["disponible"]=="si"){
    alert("Nombre disponible");
  }
  else{
    alert("Nombre no disponible, pruebe alguno de los siguientes")
    opciones=datos["alternativas"]

    opciones.forEach(element => {

      enlace=document.createElement("a");
      enlace.setAttribute("id",`${element}`);
      enlace.setAttribute("href","#");
      enlace.innerText=element;

      nuevo=document.createElement("li");
      nuevo.appendChild(enlace);
      lista.appendChild(nuevo);
    });
   
    escuchar();
  }

}

function escuchar(){
  opciones=document.getElementsByTagName("a");

  for (let i = 1; i < opciones.length; i++) {
    opciones[i].addEventListener("click", sugerencia);
  }
}

function sugerencia(e){
  login.value=e.target.getAttribute("id");
}