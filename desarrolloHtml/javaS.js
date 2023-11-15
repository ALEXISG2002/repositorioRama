// Importamos los archivos CSS


// Creamos una función para generar un número aleatorio entre 1 y 6
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  // Creamos una función para dibujar los dados
  function dibujarDados() {
    // Obtenemos los dados
    const dados = document.querySelectorAll('.dado');
  // Generamos un número aleatorio para cada dado
    for (let i = 0; i < dados.length; i++) {
      const dado = dados[i];
  
      // Cargamos la imagen del dado
      const imagen = document.createElement('img');
      imagen.src = `dado-${generarNumeroAleatorio()}.png`;
  
      // Agregamos la imagen al dado
      dado.appendChild(imagen);
    }
  }
  dibujarDados();

  document.querySelector('#lanzar').addEventListener('click', ()=>
  {dibujarDados
});