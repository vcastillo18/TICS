document.write('Una agenda')
let opcion = parseInt(prompt('Escoge una opción \n1: agregar \n2: listar \n3: salir'));
let seguir = true;
document.write(opcion);

const personas = [];
// const persona = {
//     "nombre": ,
//     "apellido": ,
//     "Facultad": ,
//     "Teléfono": ,
//     "Edad":
// };

while (seguir) {
    let opcion = parseInt(prompt('Escoge una opción \n1: agregar \n2: listar \n3: salir'));
    switch(opcion) {
    case 1:
        alert('Escogiste la opción 1');
        let nombre = prompt('Ingresa tu nombre');
        personas.push(nombre);
        console.table(personas);
        break;
    case 2:
        alert('Escogiste la opción 2');
        break;
    case 3:
        alert('Escogiste salir');
        seguir = false;
        break;
    default:
        alert('No recibí una opción válida');
        break;
    }
}