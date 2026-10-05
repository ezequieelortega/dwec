const persona = {
    nombre: "Ezequiel",
    edad: 20,
    ciudad: "Málaga",
    telefono: "600123456",

    aficiones: [
        {
            nombre: "Fútbol",
            nivel: "Alto"
        },
        {
            nombre: "Videojuegos",
            nivel: "Medio"
        }
    ],

    direccion: {
        calle: "Calle Mayor",
        numero: 10
    },

    estudios: {
        ciclo: "DAW",
        curso: 2
    }
};

const claves = Object.keys(persona);

console.log(claves);

const valores = Object.values(persona);

console.log(valores);