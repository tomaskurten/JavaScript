// n=0
// palabra="Codoacodo"

// while(palabra[n]!=null){
//     console.log(palabra[n])
//     n=n+1
// }


// numeros=[10,32,5,123,"a",true,"ultima"]
// console.log(numeros)
// console.log(numeros.length)

// // console.log(numeros[0])
// // console.log(numeros[1])
// // console.log(numeros[2])
// // console.log(numeros[3])
// // console.log(numeros[4])
// // console.log(numeros[5])
// // console.log(numeros[6])
// // console.log(numeros[6][1])
// final=numeros.length
// for(let i=0; i< final; i++){
//     console.log(numeros[i])
// }


// edades=[23,5,19,4,99,44,34,17]
// for(let i=0; i< edades.length; i++){
//     if(edades[i]>=18){
//         console.log("El sujeto en el indice: ",i," cuya edad es:", edades[i], " Es mayor de edad")
//     }
//     else{
//         console.log("El sujeto en el indice: ",i," cuya edad es:", edades[i], " Es menor de edad")
//     }
   
// }


// edades=[23,5,19,4,99,44,34,17]
// for(let i=0; i< edades.length; i++){
//     let elemento=edades[i]
//     elemento=elemento*2
//     console.log(elemento)
   
// }
// // console.log(edades)
// console.log(elemento)


// edades=[23,5,19,4,99,44,34,17]
// for(let i=0; i< edades.length; i++){
//     edades[i]=edades[i]*2
   
// }
// // console.log(edades)
// console.log(edades)
// numeros=[10,32,5,123,"a",true,"ultima"]
// numeros.push(45)
// numeros.shift()
// console.log(numeros)
// numeros.pop()

// perro={
//     nombre:"Luna",
//     edad:10,
//     raza:"Mestizo"
// }

// for(let i in perro){
//     console.log(perro[i])
// }


// if (typeof(Storage) !== "undefined") {
//     // setItem guarda datos en el dispositivo
//     localStorage.setItem("apellido", "Kürten Pérez")
//     localStorage.setItem("nombre", "Tomás")
//     localStorage.setItem("edad", 22)
//     console.log("Datos guardados.")
//    } else {
//     console.log("Web Storage no soportado.")
//    }
   
// if (typeof(Storage) !== "undefined") {
//     // getItem recupera datos del dispositivo
//     ape = localStorage.getItem("apellido")
//     nom = localStorage.getItem("nombre")
//     console.log(ape + ", " + nom)
//    } else {
//     console.log("Web Storage no soportado.")
//    }

// if (typeof(Storage) !== "undefined") {
//     // setItem guarda datos en el dispositivo
//     sessionStorage.setItem("curso", "Full Stack Python")
//     // getItem recupera datos del dispositivo
//     curso = sessionStorage.getItem("curso")
//     console.log("recuperado:" + curso)
//    } else {
//     console.log("Web Storage no soportado.")
//    }


// perro={
//     nombre:"Luna",
//     edad:10,
//     raza:"Mestizo"
// }
// console.log(perro)
// miJSON=JSON.stringify(perro)
// console.log(miJSON)

// miOBJ=JSON.parse(miJSON)
// console.log(miOBJ)


miJSON=`
{
    "squadName" : "Super Hero Squad",
    "homeTown" : "Metro City",
    "formed" : 2016,
    "secretBase" : "Super tower",
    "active" : true,
    "members" : [
      {
        "name" : "Molecule Man",
        "age" : 29,
        "secretIdentity" : "Dan Jukes",
        "powers" : [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name" : "Madame Uppercut",
        "age" : 39,
        "secretIdentity" : "Jane Wilson",
        "powers" : [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name" : "Eternal Flame",
        "age" : 1000000,
        "secretIdentity" : "Unknown",
        "powers" : [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }
`


// console.log(miJSON)
superheroes=JSON.parse(miJSON)
console.log(superheroes.members[1].powers[1])