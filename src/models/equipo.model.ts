import { Estadio } from "./estadio.model";
import { Jugador } from "./jugador.model";

export type EquipoTipo = "Futbol" | "Basket" | "Beisbol";
export type EquipoColores = "Blanco" | "Rojo" | "Verde" | "Negro" | "Azul" | "Naranja";

export interface CrearEquipo{
    id:number;
    nombre: string;
    tipo:EquipoTipo;
    ciudad: string;
    colores: EquipoColores;
    estadio: Estadio;
    jugadores: Jugador[];
}

export class Equipo{
    id:number;
    nombre: string;
    tipo:EquipoTipo;
    ciudad: string;
    colores: EquipoColores;
    estadio: Estadio;
    jugadores: Jugador[];

    constructor(crearEquipo: CrearEquipo){
        this.id = crearEquipo.id;
        this.nombre = crearEquipo.nombre;
        this.tipo = crearEquipo.tipo;
        this.ciudad = crearEquipo.ciudad;
        this.colores = crearEquipo.colores;
        this.estadio = crearEquipo.estadio;
        this.jugadores = crearEquipo.jugadores;
    }
}