boton=document.getElementById("comprobar");

boton.addEventListener("click", comprobar);

function comprobar(){
fetch('http://Ejercicio1.loc/compruebaDisponibilidad.php')

.then(response => {
    if(response.ok){
        return response.text();
        
    }
    return Promise.reject(response);
})

.then(datos =>{
  if(datos=="si"){alert("El usuario SI esta disponible");}
  else{alert("El usuario NO esta disponible")}
})
.catch(response =>{
  console.log("Error: "+response)})
}
