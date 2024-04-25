//sin parametros entrada salida
// function saludar(){
//     console.log("Hola desde funcion!")
// }

// console.log("Hola")
// for(var i=0; i<3;i++){
//     saludar()
// }
// console.log("Hola")
// x=6
// if(x>5){
//     saludar()
// }

//sin parametros salida

// function sumar(a,b){
//     console.log("La suma es:",a+b)
// }

// sumar(3,5)
// sumar(3,5)

//sin parametros entrada
// function sumar35(){
//     // console.log("La suma es:",a+b)
//     return 3+5
// }

// resultado=sumar35()
// console.log(resultado)
// console.log(resultado*3)
// console.log(resultado-5)


//con parametros entrada y salida

// function sumar(a,b){
//     return a+b
// }

// resultado1=sumar(3,5)
// x=10
// y=22
// resultado2=sumar(x,y)
// console.log("resultado 1 ",resultado1)
// console.log("resultado 1 X 3",resultado1*3)
// console.log("resultado 2 ",resultado2)
// resultado3=sumar(334,222)
// console.log("resultado 3 ",resultado3)


//con parametros pre determinados
// function saludar(saludo="Hola",nombre="Tomás"){
//     console.log(saludo+" "+nombre)
// }
// saludar("Adios")
// saludar("Hola","Ricardo")
// saludar("Hola","Ana")
// saludar()


// function mayor(edad){
//     if(edad>17){
//         a="Mayor de edad"
//     }
//     else{
//         a="Menor de edad"
//     }
//     return a
//     console.log("Fin de la funcion")
// }

// persona1=mayor(12)
// persona2=mayor(32)
// console.log(persona1)
// console.log(persona2)



// Función tradicional
// function cuadrado(x){
//  return x*x
// }
// console.log(cuadrado(2))

// // Función Flecha (Arrow)
// var aCuadrado = x => x*x
// console.log(aCuadrado(2))



// Funcion anonima
// const saludo = function(){
//     return "Hola!"
// }

// console.log(saludo)
// console.log(saludo())


// //ALCANCE

// function auto(){
//     var marca="Ferrari" //local a auto()
//     console.log(marca)
// }

// // fuera de la funcion
// marca="Fiat" //global
// auto()
// console.log(marca)



// x=3
// if(x>1){
//     let a
//     a=5
//     console.log(a)
// }
// console.log(a)


// var a = 5
// var b = 10
// if (a == 5) {
//  let a = 4 // El alcance es dentro del bloque if
//  var b = 15 // El alcance es global, sobreescribe a 10
//  console.log(a) // 4, por alcance a nivel de bloque
//  console.log(b) // 15, por alcance global
// }

// console.log(a)
// console.log(b) 


// //callbacks
// function saludar(nombre) {
//     alert('Hola ' + nombre)
//   }

// function buendia(persona) {
//     alert('Buen dia ' + persona)
// }
// function adios(persona) {
//     alert('Adios ' + persona)
// }
// function procesarEntradaUsuario(callback) {
//     var nombre = prompt('Por favor ingresa tu nombre.')
//     callback(nombre)
// }
// // saludar("Tomas")
// // procesarEntradaUsuario(saludar)
// // procesarEntradaUsuario(buendia)
// procesarEntradaUsuario(adios)



//Clausura
// function iniciar(){
//     var nombre="Tomás"
//     console.log(nombre)
//     function mostrarNombre(){
//         alert(nombre)
//     }
//     mostrarNombre()
// }
// iniciar()


function creaSumador(x) {
 return function(y) {
 return x + y;
 };
 }
 var suma5 = creaSumador(5);
 var suma10 = creaSumador(10);
 console.log(suma5(2)); // muestra 7
 console.log(suma10(4)); // mues