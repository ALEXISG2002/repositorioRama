import './rama.css';

function generarNumeroAleatorio(){
    return Math.floor(Math.random() * 6) + 1;
}

function dibujarDAdos(){
    const dados= document.querySelectorAll('.dado');

    for (let i = 0; i < dados.length; i++){
        const dado=[i];
        const imagen = document.createElement('img');
        imagen.src ='img/dado-${generarNumeroAleatorio()}.png';
    
    }

}

document.querySelector('#lanzar').addEventListener('click', () =>{});