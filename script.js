let menu = true
let mascotas = []

alert("Binevenido a la veterinaria!")

do {
    let opcion = parseInt(prompt("Que tipo de mascota desea agregar? \n1) Gato - Costo 100.000$ \n2) Perro - Costo 150.000$ \n3) Reptil - Costo 300.000$ \n4) Cancelar"))
    if (opcion === 1) {
        const g = new Gato(100000)
        g.agregar()
        mascotas.push(g)
    } else if (opcion === 2) {
        const p = new Perro(150000)
        p.agregar()
        mascotas.push(p)
    } else if (opcion === 3) {
        const r = new Reptil(300000)
        r.agregar()
        mascotas.push(r)
    } else if (opcion === 4) {
        menu = false
        alert("Cancelando")
    } else {
        alert("Opcion invalida")
    }
    if (opcion !== 4) {
        let opcion2 = parseInt(prompt("Deseas agregar otra mascota?\n1) Si\n2) No"))
        if (opcion2 === 1) {
            menu = true
        } else if (opcion2 === 2) {
            menu = false
        } else {
            alert("Opcion invalida")
        }
    }
} while (menu)

let menu2 = true

while (menu2) {
    let opcion2 = parseInt(prompt("Que desea hacer? \n1) Ver listado de mascotas \n2) Agendar cita \n3) Solicitar medicamento \n4) Calcular costos \n5) Salir"))
    switch (opcion2) {
        case 1:
            let opcionFiltro = parseInt(prompt("Desea filtar por el tipo de animal? \n1) Si\n2) No"))
            if (opcionFiltro === 1) {
                let filtro = parseInt(prompt("Opciones: \n1) Gato \n2) Perro \n3) Reptil"))
                if (filtro === 1) {
                    let gatos = mascotas.filter(mascota => mascota.precio == 100000)
                    alert("GATOS \n"+gatos.map(gato => {
                        return "- " + gato.nombre + "\n"
                    }).join(''))
                } else if (filtro === 2) {
                    let perros = mascotas.filter(mascota => mascota.precio == 150000)
                    alert("PERROS \n"+perros.map(perro => {
                        return "- " + perro.nombre + "\n"
                    }).join(''))
                } else if (filtro === 3) {
                    let reptiles = mascotas.filter(mascota => mascota.precio == 300000)
                    alert("REPTILES \n"+reptiles.map(reptil => {
                        return "- " + reptil.nombre + "\n"
                    }).join(''))
                } else {
                    alert("Opcion invalida")
                }
            } else if (opcionFiltro === 2) {
                alert(mascotas.map(mascota => {
                    return "- " + mascota.nombre + "\n"
                }).join(''))
            } else {
                alert("Opcion invalida")
            }
            break
        case 2:
            let nombreCita = prompt("Ingrese el nombre de la mascota a la que desea agendar la cita").toLowerCase()
            let cita = mascotas.find(mascota => mascota.nombre === nombreCita)
            let anio = prompt("Ingrese el año de la cita")
            let mes = prompt("Ingrese el mes de la cita")
            let dia = prompt("Ingrese el dia de la cita")
            cita.agendarCita(anio, mes, dia)
            break
        case 3:
            let nombreMedicina = prompt("Ingrese el nombre de la mascota a la que desea asignar el medicamento").toLowerCase()
            let medicina = mascotas.find(mascota => mascota.nombre === nombreMedicina)
            let opcion = parseInt(prompt("Que medicamento deseas apartar? \n1) Antipulgas - 80000$ \n2) Antiparasitario 50000$ \n3) Suplemento Alimenticio 25000$\n4) Solución Oral 60000$\n5) Vitaminas 30000$"))
            if(opcion >= 0 && opcion <= 5) {
                medicina.asignarMedicina(opcion)
            } else {
                alert("Opcion invalida")
            }
            break
        case 4:
            let nombreFactura = prompt("Ingrese el nombre de la mascota a la que desea generar la factura").toLowerCase()
            let factura = mascotas.find(mascota => mascota.nombre === nombreFactura)
            factura.generarFactura()
            break
        case 5:
            menu2 = false
            alert("Saliendo!")
            break
        default:
            alert("Opcion invalida")
    }
}