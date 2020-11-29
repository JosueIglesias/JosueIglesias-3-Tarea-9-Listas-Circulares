export default class Ruta{
    constructor(){
        this.inicio = null
    }

    agregarBase(nuevo){
        if (this.inicio === null){
            this.inicio = nuevo
            this.inicio.siguiente = this.inicio
            this.inicio.anterior = this.inicio

        } else {
            let t = this.inicio
            while(t.siguiente != this.inicio){
                t = t.siguiente
            }
            t.siguiente = nuevo
            t.siguiente.anterior = t
            t.siguiente.siguiente = this.inicio
            this.inicio.anterior = nuevo
        }
    }

    buscarBase(nombre){
        let t = this.inicio
        if (t != null){
            while(t.nombre != nombre && t.siguiente != this.inicio){
                t = t.siguiente
            }
            if (t.nombre === nombre){
                return t
            } else {
                alert('Base no encontrada')
            }
        }
    }

    eliminarBase(nombre){
        let t = this.inicio

        if(this.inicio.nombre === nombre  && this.inicio.siguiente === this.inicio){
            this.inicio = null
        } else if (this.inicio.nombre === nombre){
            this.inicio.siguiente.anterior = this.inicio.anterior
            this.inicio.anterior.siguiente = this.inicio.siguiente
            this.inicio = this.inicio.siguiente
        } else {
            while (t.siguiente.nombre != nombre && t.siguiente != this.inicio){
                t = t.siguiente
            }

            if (t.siguiente.nombre === nombre){
                t.siguiente = t.siguiente.siguiente
                t.siguiente.anterior = t
            } else {
                alert('Producto no encontrado')
            }
        }
    }

    insertarBase(nuevo, posicion){
        let t = this.inicio
        if (posicion === 1){
            nuevo.anterior = t.anterior
            nuevo.anterior.siguiente = nuevo
            nuevo.siguiente = t
            t.anterior = nuevo
            this.inicio = nuevo
        } else {
            let i = 1
            while (i != posicion){
                if (t.siguiente != this.inicio){
                    t = t.siguiente
                    i++
                } else {
                    alert('Posición inválida')
                    break
                }
            } 
    
            if (i === posicion){
                nuevo.anterior = t.anterior
                nuevo.siguiente = t
                nuevo.anterior.siguiente = nuevo
                nuevo.siguiente.anterior = nuevo
            }
        }
    }

    listarBases(){
        let concat = ""
        let t = this.inicio
        concat = t.nombre + " "
        while (t.siguiente != this.inicio){
            concat += t.siguiente.nombre + " "
            t = t.siguiente
        }
        return concat
    }

    crearRecorrido(inicio, horaInicio, horaFinal){
        let t = this.buscarBase(inicio)
        let concat = t.nombre + " " + horaInicio.getHours() + ":" + horaInicio.getMinutes()

        while(horaInicio.getHours() < horaFinal.getHours() || horaInicio.getMinutes() < horaFinal.getMinutes()){
            horaInicio.setMinutes(horaInicio.getMinutes() + t.siguiente.minutos)
            t = t.siguiente
            concat += " // " + t.nombre + " " + horaInicio.getHours() + ":" + horaInicio.getMinutes()
        }
        return concat
    }
}

