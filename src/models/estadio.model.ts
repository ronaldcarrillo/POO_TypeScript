export interface CrearEstadio{
    id: number;
    nombre: string;
    capacidad: number;
}
export class Estadio{
    id: number;
    nombre: string;
    capacidad: number;

    constructor(crearEst: CrearEstadio){
        this.id = crearEst.id;
        this.nombre = crearEst.nombre;
        this.capacidad = crearEst.capacidad;
    }
}