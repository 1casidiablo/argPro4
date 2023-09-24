const boton = document.querySelector('#boton');
const foto = document.querySelector('#foto');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const correo = document.querySelector('#correo');
const telefono = document.querySelector('#telefono');
const celular = document.querySelector('#celular');
const nacionalidad = document.querySelector('#nacionalidad');
const fechanacimiento = document.querySelector('#fechanacimiento');
const edad = document.querySelector('#edad');
const calle = document.querySelector('#calle');
const numero = document.querySelector('#numero');
const ciudad = document.querySelector('#ciudad');
const estado = document.querySelector('#estado');




const generarCv = async () => {
    try {
        const url = 'https://randomuser.me/api/';
        const respuesta = await fetch(url);
        const { results } = await respuesta.json();
        const datos = results[0];

        foto.src = datos.picture.medium;
        nombre.textContent = datos.name.first;
        apellido.textContent = datos.name.last;
        correo.textContent = datos.email;
        telefono.textContent = datos.phone;
        celular.textContent = datos.cell;
        nacionalidad.textContent = datos.nat;
        fechanacimiento.textContent = datos.dob.date;
        edad.textContent = datos.dob.age;
        calle.textContent = datos.location.street.name;
        numero.textContent = datos.location.street.number;
        ciudad.textContent = datos.location.city;
        estado.textContent = datos.location.state;   

    } catch (error) {
        console.log(error);
    }
}
boton.addEventListener('click', generarCv);
document.addEventListener('DOMContentLoaded', generarCv);