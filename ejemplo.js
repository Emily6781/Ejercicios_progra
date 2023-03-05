alert("Hola") //Este hacee que se manden mensajes 

recipiente = "pedro";

alert(recipiente); //invocar la variable 

//Trabajan con bloques
var numero = 15; //alcanse global
let nunmero = 15; //Se utiliza recomendada, pues solo se utiliza dentro de ese bloque y no por fuera
const nombre= "dalto"; //constantes, nunca va cambiar

document.write(recipiente);
// muestra el texto en la pantalla principal

frase = "soy ${recipiente} y estoy caminando";

document.write(frase);

dineroCofla = prompt("¿Cuánto dinero tienes cofla");
//lparseInt()

//document.getElementById();

//Array
let variable = "contenido";

frutas = ["banana", "manzana", "mango"]

document.write(frutas[3])

let animales = ["gato", "perro", "pez"];
animales.tamaño = "grande";

for (animal in animales){
    document.write(animales[1] + "<br>");
}

document.write("<br>");

for (animal of animales){
    document.write(animal + "<br>");
}
 
function saludar(){
respuesta = prompt("!Hola ¿Cómo estuvo tu día?")
if (respuesta == "bien"){
    alert("me alegro");

}
else {
    alert("una pena")
}

}

saludar()

function conocer(){
    return "la función se ejecuta";
} 
let saludo = conocer();

document.write(saludo);

let free = false;

const validarCliente = (time) => {
    let edad = prompt("¿Cuál es tu edad?");
    if (edad > 18) {
        if (time >= 2 && time < 7 && free == false){
            alert("Puedes pasar gratis"); 
            free = true;
        } else {
            alert('son las ');
        }
    } else {
        alert("No puedes ingresar por ser menor de edad");
    }
}

validarCliente(23);  

let cantidad =prompt("¿Cuántos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno"+ (i+1)), 0]
}

const tomarAsistencia = (nombre, p) => {
    let presencia = prompt(nombre); 
    if (presencia == "p" || presencia == "p"){
        alumnosTotales[i][1]++;
    }
}

for (i = 0; i < 30; i++){
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}