// nombre="Luna"
// edad=10
// color="negro"
// console.log(color)
// console.log(edad)
// console.log(nombre)


// var Perro1={
//     nombre:"Luna",
//     edad:10,
//     color:"negro",
//     ladrar: function(){
//         // console.log(this.nombre,", edad:",this.edad," dice: Guau!")
//         return this.nombre
//     }
// }

// // console.log(Perro1)
// console.log(Perro1.ladrar())
// // console.log(Perro1.color)
// // console.log(Perro1.edad)
// // console.log(Perro1.nombre)


function Perro(nombre, edad, color) {
    this.nombre = nombre
    this.edad = edad
    this.color = color

    this.ladrar=function(){
        console.log(this.nombre,"dice: Guau!")
    }
    }

var perro1= new Perro("Ron",3,"marron")
// console.log(perro1)
// console.log(perro1.color)
perro1.ladrar()

var perro2 = new Perro("Lola",11,"blanca")
// console.log(perro2)
// console.log(perro1.color)
perro2.ladrar()
