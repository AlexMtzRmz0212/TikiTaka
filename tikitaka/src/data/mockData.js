// data/mockData.js

// Equipos de ejemplo para torneos
export const equipos = [
  { id: 1, nombre: "Los Cuervos FC", logo: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=50&h=50&fit=crop" },
  { id: 2, nombre: "Atlético Azteca", logo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=50&h=50&fit=crop" },
  { id: 3, nombre: "Real Maya", logo: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=50&h=50&fit=crop" },
  { id: 4, nombre: "Deportivo Quetzal", logo: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=50&h=50&fit=crop" },
  { id: 5, nombre: "Águilas Doradas", logo: "https://images.unsplash.com/photo-1489944440616-207fc862df9a?w=50&h=50&fit=crop" },
  { id: 6, nombre: "Tiburones Rojos", logo: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=50&h=50&fit=crop" },
  { id: 7, nombre: "Guerreros Jaguar", logo: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=50&h=50&fit=crop" },
  { id: 8, nombre: "Pumas UNAM", logo: "https://images.unsplash.com/photo-1486286701205-1c4d71509491?w=50&h=50&fit=crop" }
];

// Tabla de posiciones - Temporada Regular
export const tablaPosiciones = [
  { posicion: 1, equipo: "Los Cuervos FC", pj: 10, pg: 8, pe: 1, pp: 1, gf: 28, gc: 8, pts: 25 },
  { posicion: 2, equipo: "Atlético Azteca", pj: 10, pg: 7, pe: 2, pp: 1, gf: 24, gc: 10, pts: 23 },
  { posicion: 3, equipo: "Real Maya", pj: 10, pg: 6, pe: 2, pp: 2, gf: 20, gc: 12, pts: 20 },
  { posicion: 4, equipo: "Deportivo Quetzal", pj: 10, pg: 5, pe: 3, pp: 2, gf: 18, gc: 14, pts: 18 },
  { posicion: 5, equipo: "Águilas Doradas", pj: 10, pg: 4, pe: 2, pp: 4, gf: 16, gc: 16, pts: 14 },
  { posicion: 6, equipo: "Tiburones Rojos", pj: 10, pg: 3, pe: 2, pp: 5, gf: 14, gc: 20, pts: 11 },
  { posicion: 7, equipo: "Guerreros Jaguar", pj: 10, pg: 2, pe: 1, pp: 7, gf: 10, gc: 25, pts: 7 },
  { posicion: 8, equipo: "Pumas UNAM", pj: 10, pg: 0, pe: 1, pp: 9, gf: 6, gc: 31, pts: 1 }
];

// Llave de Liguilla
export const bracketData = {
  cuartos: [
    { id: 1, equipo1: "Los Cuervos FC", equipo2: "Pumas UNAM", marcador1: 3, marcador2: 0, ganador: "Los Cuervos FC" },
    { id: 2, equipo1: "Atlético Azteca", equipo2: "Guerreros Jaguar", marcador1: 2, marcador2: 1, ganador: "Atlético Azteca" },
    { id: 3, equipo1: "Real Maya", equipo2: "Tiburones Rojos", marcador1: 4, marcador2: 2, ganador: "Real Maya" },
    { id: 4, equipo1: "Deportivo Quetzal", equipo2: "Águilas Doradas", marcador1: 1, marcador2: 1, ganador: "Deportivo Quetzal" }
  ],
  semifinales: [
    { id: 5, equipo1: "Los Cuervos FC", equipo2: "Deportivo Quetzal", marcador1: 2, marcador2: 1, ganador: "Los Cuervos FC" },
    { id: 6, equipo1: "Atlético Azteca", equipo2: "Real Maya", marcador1: 0, marcador2: 2, ganador: "Real Maya" }
  ],
  final: { id: 7, equipo1: "Los Cuervos FC", equipo2: "Real Maya", marcador1: null, marcador2: null, ganador: null }
};

// Precios
export const precios = [
  { tipo: "Hora Normal", horario: "Lunes a Viernes 8:00 - 17:00", precio: "$800 MXN" },
  { tipo: "Hora Prime", horario: "Lunes a Viernes 17:00 - 23:00", precio: "$1,200 MXN" },
  { tipo: "Fin de Semana", horario: "Sábados y Domingos", precio: "$1,000 MXN" },
  { tipo: "Torneo Completo", horario: "4 horas (mínimo 4 equipos)", precio: "$4,500 MXN" }
];

// Horarios disponibles para reservas
export const horariosDisponibles = [
  "08:00 - 09:00", "09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00",
  "12:00 - 13:00", "13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00",
  "16:00 - 17:00", "17:00 - 18:00", "18:00 - 19:00", "19:00 - 20:00",
  "20:00 - 21:00", "21:00 - 22:00", "22:00 - 23:00"
];

// Galería de imágenes
export const galeriaImagenes = [
  { id: 1, url: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=600&h=400&fit=crop", titulo: "Cancha Principal" },
  { id: 2, url: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=600&h=400&fit=crop", titulo: "Torneo Nocturno" },
  { id: 3, url: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=600&h=400&fit=crop", titulo: "Vestidores" },
  { id: 4, url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop", titulo: "Zona de Espectadores" },
  { id: 5, url: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=400&fit=crop", titulo: "Iluminación LED" },
  { id: 6, url: "https://images.unsplash.com/photo-1560012057-4372e14c5085?w=600&h=400&fit=crop", titulo: "Estacionamiento" }
];