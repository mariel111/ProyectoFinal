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
document.getElementById("calendario").onmouseover= function(){
document.getElementById("calendario").innerHTML = "fecha de nacimiento"
}
document.getElementById("dni").onmouseover= function () {
document.getElementById("dni").innerHTML = "dni"
}
document.getElementById("cuit").onmouseover= function () {
document.getElementById("cuit").innerHTML = "cuit"
}
document.getElementById("boton").onclick = function () {
    console.log("Capturamos el evento click");
    document.getElementById('demo').innerHTML = "NIVEL INICIAL Y SEGUIMOS AVANZANDO!!!"
}
document.getElementById("h3").onmouseover= function(){
    document.getElementById("h3").style.color = "red";
}


