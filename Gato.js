class Gato {
    constructor(precio) {
        this.nombre = ""
        this.raza = ""
        this.edad = 0
        this.motivo = ""
        this.precio = 100000
        this.cita = ""
        this.medicamento = []
        this.precioMedicamento = [80000, 50000, 25000, 60000, 30000]
        this.factura = 0
    }
    agregar() {
        this.nombre = prompt("Ingrese el nombre de la mascota").toLowerCase()
        this.raza = prompt("Ingrese la raza de la mascota")
        this.edad = prompt("Ingrese la edad de la mascota")
        this.motivo = prompt("Ingrese el motivo del ingreso")
        return alert("Se ha ingresado la mascota")
    }
    agendarCita(anio, mes, dia) {
        let agenda = new Date(anio, mes - 1, dia)
        alert("!Se ha creado la cita el dia: " + agenda.toLocaleDateString())
        this.cita = agenda
    }
    asignarMedicina(opcion) {
        for (let i = 0; i < this.precioMedicamento.length; i++) {
            if (opcion === i) {
                this.medicamento.push(this.precioMedicamento[opcion - 1])
                alert("Se ha asignado el medicamento")
                break
            }
        }
    }
    generarFactura() {
        for (let i = 0; i < this.medicamento.length; i++) {
            this.factura += this.medicamento[i]
        }
        this.factura = this.precio + this.factura
        alert("El costo total es de: " + this.factura)
    }
}
