//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

document.getElementById("boton").onclick = function () {
    console.log("Capturamos el evento click");
    document.getElementById('demo').innerHTML = "NIVEL INICIAL Y SEGUIMOS AVANZANDO!!!"
}

var x = document.getElementById("h3");
x.addEventListener("mouseover", myFunction);
x.addEventListener("mouseout", mySecondFunction);

function myFunction() {
  document.getElementById("h3").style.color= "red";
}
function mySecondFunction() {
  document.getElementById("h3").style.color= "white";

}

