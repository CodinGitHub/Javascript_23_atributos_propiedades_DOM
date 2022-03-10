//CREAR NODOS

const parrafoExtra = document.createElement('p');
const parrafoCero = document.createElement('p');
const parrafoCuatro = document.createElement('p');
const textoParrafoCuatro = document.createTextNode('Párrafo 4');
const parrafoCinco = document.createElement('p');
parrafoCinco.innerHTML = 'Párrafo 5';
parrafoCero.innerHTML = 'Párrafo 0';
parrafoExtra.innerHTML = 'Párrafo Extra';

//Seleccionar elemento padre

const elementoPadre = document.querySelector('.padre');

//Seleccionar hijo referencia
const parrafoUno = document.querySelector('p');
const parrafoDos = document.querySelector('#parrafo2');

//AGREGAR NODOS

// elementoPadre.appendChild(parrafoCuatro);
parrafoCuatro.appendChild(textoParrafoCuatro);
// elementoPadre.appendChild(parrafoCinco);
elementoPadre.append(parrafoCuatro, parrafoCinco);
elementoPadre.insertBefore(parrafoCero, parrafoDos);

elementoPadre.insertAdjacentElement('afterend', parrafoExtra);

//ATRIBUTOS

parrafoExtra.setAttribute('class', 'parrafos');