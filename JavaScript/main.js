
function tocaSom(IdElementAoudio){

  document.querySelector(IdElementAoudio).play();
    
}



const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];
     
    const idAudio = `#som_${instrumento}`;//template string
//    console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    
 //   console.log(contador);


    tecla.onkeydown = function (evento) {

       // console.log(evento.code == 'Space' || evento.code ==='Enter')

            if (evento.code === 'Space' || evento.code ==='Enter'){
                tecla.classList.add('ativa');
             }

}



tecla.onkeyup = function() {
    
    tecla.classList.remove('ativa');
}

}

