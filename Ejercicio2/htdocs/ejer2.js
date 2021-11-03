boton=document.getElementById("comprobar");
boton.addEventListener("click", comprobar);

input=document.getElementById("login");

lista=document.getElementById("lista");

function comprobar(){
fetch('http://Ejercicio2.loc/compruebaDisponibilidadXML.php',{
  method: 'POST', 
  body: input,//No se como pasarle el login al php
  headers:{
    'Content-Type': 'application/xml'
  }
})

.then(response => {
    if(response.ok){
        return response.text();
        
    }
    return Promise.reject(response);
})

.then(datos =>{const parser = new DOMParser();
  const xml = parser.parseFromString(datos, "application/xml");
  let disponible = xml.getElementsByTagName('disponible');
  let login = xml.getElementsByTagName('login');
  respuesta=disponible[0].textContent;
  if(respuesta=="si"){alert("Nombre disponible")}
  else{
    alert("El nombre no esta disponible, pruebe alguno de los sugeridos:")
  for (let i = 0; i < login.length; i++) {
    opcion=login[i].textContent;

    enlace=document.createElement("a");
    enlace.setAttribute("id",`${opcion}`);
    enlace.setAttribute("href","#");
    enlace.innerText=opcion;
    nuevo=document.createElement("li");
    nuevo.appendChild(enlace);
    lista.appendChild(nuevo);
    
    
  }
  escuchar();

}
  
})
.catch(response =>{
  console.log("Error: "+response)})
}

function escuchar(){
  opciones=document.getElementsByTagName("a");

  for (let i = 1; i < opciones.length; i++) {
    opciones[i].addEventListener("click", sugerencia);
  }
}
/**/

function sugerencia(e){
  login.value=e.target.getAttribute("id");
}