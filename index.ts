import { Equipo} from "./src/models/equipo.model";
import { Estadio } from "./src/models/estadio.model";
import { Jugador } from "./src/models/jugador.model";

let estadio1 = new Estadio({id:1, nombre: 'Metropolitano', capacidad:11000});
// console.log(estadio1);

let jugador1 = new Jugador({id:1, nombre:'Ronald Carrillo',edad:43, posicion: 'GK'});
let jugador2 = new Jugador({id:2, nombre:'Pibe Valderrama',edad:73, posicion: 'DFC'});
let jugador3 = new Jugador({id:3, nombre:'Tino Asprilla',edad:65, posicion: 'DFR'});
let jugadores = [jugador1, jugador2, jugador3];
// console.log(jugador1);

let equipo1 = new Equipo({id:1, nombre:'Deportivo Tapita',tipo:"Futbol", ciudad:"Medellín",colores:"Azul",estadio:estadio1,jugadores:jugadores});
let equipo2 = new Equipo({id:2, nombre:'Deportivo Oyita',tipo:"Futbol", ciudad:"Santa Marta",colores:"Naranja",estadio:estadio1,jugadores:jugadores});
let equipo3 = new Equipo({id:3, nombre:'Los Caimanes',tipo:"Beisbol", ciudad:"Barranquilla",colores:"Rojo",estadio:estadio1,jugadores:jugadores});
let equipos = [equipo1, equipo2, equipo3];

function filter<T>(jugadores: T[], property: keyof T, value: T[keyof T]): T[]{
    return jugadores.filter((jugador)=> jugador[property] === value);
}

// console.log(filter<Jugador>(jugadores, "edad", 73));
// console.log(filter<Jugador>(jugadores, "posicion", "DFR"));
console.log(filter<Equipo>(equipos, "tipo", "Futbol"));
