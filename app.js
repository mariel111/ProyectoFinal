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
//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales par aluego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let css = document.getElementById("css");
crearBarra(css);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let python = document.getElementById("python");
crearBarra(python);
let git = document.getElementById("git");
crearBarra(git);
let sql = document.getElementById("sql");
crearBarra(sql);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 15, 3, intervalHtml);    
        },100);
        const intervalCss = setInterval(function(){
            pintarBarra(css, 14, 2, intervalCss);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 13, 0, intervalJavascript);  
        },100);
        const intervalPython = setInterval(function(){
            pintarBarra(python, 15,1,intervalPython);
        },100);
        const intervalGit_github = setInterval(function(){
            pintarBarra(git, 16, 4, intervalGit_github);
        },100);
        const intervalSql_server = setInterval(function(){
            pintarBarra(sql, 13, 5, intervalSql_server);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "firebrick";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
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

