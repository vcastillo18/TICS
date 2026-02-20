document.write('Una agenda')
let opcion = parseInt(prompt('Escoge una opción \n1: agregar \n2: listar \n3: salir'));
let seguir = true;
document.write(opcion);

const personas = [];

while (seguir) {
    let opcion = parseInt(prompt('Escoge una opción \n1: agregar \n2: listar \n3: salir'));
    switch(opcion) {
    case 1:
        alert('Escogiste la opción 1');
        let nombre = prompt('Ingresa tu nombre');
        let apellido = prompt('Ingresa tu apellido');
        let facultad = prompt('Ingresa tu facultad');
        let telefono = parseInt(prompt('Ingresa tu telefono'));
        let edad = parseInt(prompt('Ingresa tu edad'));

        const persona = {
            "Nombre": nombre,
            "Apellido": apellido,
            "Facultad": facultad,
            "Teléfono": telefono,
            "Edad": edad
        };

        personas.push(persona);
        console.table(personas);
        break;
    case 2:
        alert('Escogiste la opción 2');
        console.table(personas);
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