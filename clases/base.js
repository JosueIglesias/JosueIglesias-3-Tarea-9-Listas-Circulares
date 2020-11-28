export default class Base{
    constructor(nombre, minutos){
        this.nombre = nombre
        this.minutos = minutos
        this.anterior = null
        this.siguiente = null
    }
}