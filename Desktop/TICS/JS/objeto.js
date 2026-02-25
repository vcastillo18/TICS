const productos = [
    {
        id: 1,
        nombre: "Laptop",
        precio: 12000
    },
    {
        id: 2,
        nombre: "Mouse",
        precio: 300
    },
    {
        id: 3,
        nombre: "Teclado",
        precio: 800
    }
];

console.log('Voy a recorrer el array');

let miobj = {
    id: 1,
    nombre: "Laptop",
    precio: 12000
};

const longitud = productos.length;

setTimeout(() => {
    console.log(`el tamaño es: ${longitud}`);
    console.table(productos, ['nombre']);

    // productos.forEach((v, i) => {
    //     console.log(`${i}: ${v.nombre}`);
    //     console.log(v.precio);
    //     console.log('---------------------');
    // });

    let mensaje_estado = document.querySelector('#mensaje_estado');
    console.log(mensaje_estado.textContent);
    mensaje_estado.textContent = `Recorrí ${longitud} elementos`;
}, 5000);