import Ruta from "./clases/ruta.js"
import Base from "./clases/base.js"

var btnAgregar = document.querySelector('#btnAgregarBase')
var btnEliminar = document.querySelector('#btnEliminarBase')
var btnBuscar = document.querySelector('#btnBuscarBase')
var btnImprimir = document.querySelector('#btnImprimirBase')
var btnInsertar = document.querySelector('#btnInsertarBase')
var btnCrearTarjeta = document.querySelector('#btnCrearTarjeta')

var nombreBase = document.querySelector('#nombreBase')
var minutosBase = document.querySelector('#minutosBase')
var posicionBase = document.querySelector('#posicionBase')
var etListaBase = document.querySelector('#etListaBase')
var etNombreBase = document.querySelector('#etNombreBase')
var etDuracionBase = document.querySelector('#etDuracionBase')
var etSiguienteBase = document.querySelector('#etSiguienteBase')
var etAnteriorBase = document.querySelector('#etAnteriorBase')

var horarioInicio = document.querySelector('#horaInicio')
var horarioFinal = document.querySelector('#horaFinal')


var ruta = new Ruta

btnAgregar.addEventListener('click', () => {
/*
    //let nombre = nombreBase.value
    //let minutos = Number(minutosBase.value)
    //let base = new Base(nombre, minutos)

    let base1 = new Base('Uno',1)
    let base2 = new Base('Dos',2)
    let base3 = new Base('Tres',3)
    let base4 = new Base('Cuatro',4)
    let base5 = new Base('Cinco',5)

    ruta.agregarBase(base1)
    ruta.agregarBase(base2)
    ruta.agregarBase(base3)
    ruta.agregarBase(base4)
    //ruta.agregarBase(base5)

    //console.log(ruta)
    //console.log(ruta.buscarBase("Dos"))
    //ruta.eliminarBase(base1.nombre)

    ruta.insertarBase(base5,4)
    console.log(ruta)
    */

    let nombre = nombreBase.value
    let minutos = Number(minutosBase.value)
    let base = new Base (nombre,minutos)
    ruta.agregarBase(base)
    console.log(ruta)
})

btnEliminar.addEventListener('click', () => {
    let nombre = nombreBase.value
    ruta.eliminarBase(nombre)
    console.log(ruta)

})

btnBuscar.addEventListener('click', () => {
    let nombre = nombreBase.value
    let base = ruta.buscarBase(nombre)
    etNombreBase.innerHTML = 'Nombre: ' + base.nombre
    etDuracionBase.innerHTML = 'Duración: ' + base.minutos
    etSiguienteBase.innerHTML = 'Siguiente: ' + base.siguiente.nombre
    etAnteriorBase.innerHTML = 'Anterior: ' + base.anterior.nombre

    console.log('Nombre: ' + base.nombre)
    console.log('Duración: ' + base.minutos)
    console.log('Siguiente: ' + base.siguiente.nombre)
    console.log('Anterior: ' + base.anterior.nombre)

})

btnImprimir.addEventListener('click', () => {
    etListaBase.innerHTML = 'Bases: ' + ruta.listarBases()
    console.log(ruta.listarBases())
})

btnInsertar.addEventListener('click', () => {
    let nombre = nombreBase.value
    let minutos = Number(minutosBase.value)
    let posicion = Number(posicionBase.value)
    let base = new Base (nombre,minutos)

    ruta.insertarBase(base,posicion)
    console.log(ruta)
})

btnCrearTarjeta.addEventListener('click', () => {
/*

    let horaInicio =  new Date()
    horaInicio.setHours(horarioInicio.value.slice(0,2))
    horaInicio.setMinutes(horarioInicio.value.slice(-2))
    //console.log(horaInicio)


    let horaFinal = new Date()
    horaFinal.setHours(horarioFinal.value.slice(0,2))
    horaFinal.setMinutes(horarioFinal.value.slice(-2))
    console.log(horaFinal)


    horaFinal.setMinutes(horaFinal.getMinutes() + 50)
    console.log(horaFinal)
    //let horarioInicio = horaInicio.value
    //let horarioFinal = horaFinal.value

    */

    let horaInicio =  new Date()
    horaInicio.setHours(horarioInicio.value.slice(0,2))
    horaInicio.setMinutes(horarioInicio.value.slice(-2))

    let horaFinal = new Date()
    horaFinal.setHours(horarioFinal.value.slice(0,2))
    horaFinal.setMinutes(horarioFinal.value.slice(-2))

   let base1 = new Base('Soriana',5)
   let base2 = new Base('Udec',10)
   let base3 = new Base('Central',15)
   let base4 = new Base('Plaza',10)

   ruta.agregarBase(base1)
   ruta.agregarBase(base2)
   ruta.agregarBase(base3)
   ruta.agregarBase(base4)
   
   console.log(ruta.crearRecorrido('Udec', horaInicio, horaFinal))
})

