
// Mensaje principal
const titulo = "Welcome to the application!";
console.log("%c" + titulo, "font-size: 18px; font-weight: bold; color: blue;");

// Mensajes de consola
const mensajeInfo = "This is an informational message.";
console.info("%c" + mensajeInfo, "font-size: 16px; color: green;");

const mensajeWarning = "This is a warning. Be cautious.";
console.warn("%c" + mensajeWarning, "font-size: 16px;");

const mensajeError = "Error! Something went wrong.";
console.error("%c" + mensajeError, "font-size: 16px;");

// Array de objetos
const usuarios = [
    { name: "John", age: 30, city: "New York" },
    { name: "Jane", age: 25, city: "San Francisco" },
    { name: "Bob", age: 40, city: "Chicago" }
];

// Mostrar la tabla
console.table(usuarios);