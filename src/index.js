class Auto {

    constructor(marca,modelo,anoe) {
        this.marca=marca;
        this.modelo=modelo;
        this.anoe=anoe;
    }

    mostrarAuto(){
        return `Este Vehiculo es ${this.marca} ${this.modelo} ${this.anoe}`
    }


}

const miCarro = new Auto('Toyota','Corolla',2024);
const miCarroHiunday = new Auto('Hiunday','Elantra',2024)

console.log(miCarro.mostrarAuto())
console.log(miCarroHiunday.mostrarAuto())



//////////////////////////////////////
function nombre_function(parametro) {
    parametro();
    
}

nombre_function(otra_function);

let variable = otra_function;

const function_flecha = () => {

}

///////////////////////////////////no esta termindado el codigo

const palabras= ['spray', 'elite','exuberant','present',];
const palabrasFiltradas = palabras.filter((palabra) => palabra.length > 6);

console.log('palabras sin filtrar' + palabras)
console.log(`palabras filtradas' ${palabrasFiltradas}`);
///////////////////////////////////
/////////////////////////////codigo completo

const array1 = [1,2,3,4];

const valorInicial = 0;
const sumaTotal = array1.reduce(
    (acumulador, numeroActual) => acumulador + numeroActual,valorInicial,
)

console.log(sumaTotal);

///////////////////////////////////

const suma = (num1, num2) => num1 + num2;
suma(1);

/////////////////////////////

const saludo = (parametro="Mundo") => console.log(`Hola ${parametro}`);
saludo("Keilor");
saludo();

//////////////////////////////////////////

const persona = {
    nombre: "Kelior",
    edad: 26,
    saludo: function () {
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`);
        
    }
}

persona.saludo();

///////////////////////////////////////////
/////////this es el contexto de window / global
window.location()
function context() {
    
}
////////////////////////////////
///////operadores - spread

const persona = {
    nombre: "Firulais",
    edad: 5,
    raza: "Pastor Aleman"

} /////celda de memoria 1

const perro_rex ={...perro}///celda de memoria 2
const perro2 = perro; //celda de memoria 1
perro2.nombre = "Rex";

console.log(perro_rex.nombre); //Rex

///////////////////////////////
/////////////operadores - rest

const saludar = (...nombres)
for (let i = 0; i < nombres.length; i++) {
    console.log(`Hola ${nombres[i]}`)
    
    
}
////otra forma de hacerlo

const arreglo_nombres = ["Keilor", "Carlos", "Juan", "Jennifer", "Sebastian", "Paula"]

///////////////////////////////////
////hacer una calculadora
const sumar = (...numeros) => ;










