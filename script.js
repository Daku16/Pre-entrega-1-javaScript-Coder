let contador = 0
let contadorG = 0
let contadorP = 0
let contadorR = 0
let menu = true

function agregar() {
    let nombre = prompt("Ingrese el nombre de la mascota")
    let raza = prompt("Ingrese la raza de la mascota")
    let edad = prompt("Ingrese la edad de la mascota")
    let motivo = prompt("Ingrese el motivo del ingreso")
    return alert("Se ha ingresado la mascota")
}
alert("Binevenido a la veterinaria!")

do {
    let opcion = parseInt(prompt("Que tipo de mascota desea agregar? \n1) Gato - Costo 100.000$ \n2) Perro - Costo 150.000$ \n3) Reptil - Costo 300.000$ \n4) Salir"))
    if (opcion === 1) {
        agregar()
        contador++
        contadorG++
    } else if (opcion === 2) {
        agregar()
        contador++
        contadorP++
    } else if (opcion === 3) {
        agregar()
        contador++
        contadorR++
    } else if (opcion === 4) {
        menu = false
        alert("Saliendo")
    } else {
        alert("Opcion invalida")
    }
    let menu2 = true
    while (menu2) {
        let opcion2 = parseInt(prompt("Deseas agregar otra mascota?\n1) Si\n2) No"))
        if (opcion2 === 1) {
            menu2 = false
        } else if (opcion2 === 2) {
            menu2 = false
            menu = false
        } else {
            alert("Opcion invalida")
        }
    }
} while (menu)
alert("La factura total de los animales ingresados es de: " + ((contadorG*100000)+(contadorP*150000)+(contadorR*300000)))