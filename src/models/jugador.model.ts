export type JugadorPosicion = "GK" | "DFC" | "DFL" | "DFR" | "MCD" | "MCO" | "MC" | "ST" | "DC" | "RF" | "LF";

export interface CrearJugador{
    id: number;
    nombre: string;
    edad: number;
    posicion: JugadorPosicion;
}

export class Jugador{
    id: number;
    nombre: string;
    edad: number;
    posicion: JugadorPosicion;
    
    constructor(crearJug: CrearJugador){
        this.id = crearJug.id;
        this.nombre = crearJug.nombre;
        this.edad = crearJug.edad;
        this.posicion = crearJug.posicion;
    }
}