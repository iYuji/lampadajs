const ligadesliga = document.getElementById('onoff')
const lampada = document.getElementById('lamp')


function taquebrado() {
    return lampada.src.indexOf ('quebrada') > -1
}

function liga () {
    if( !taquebrado () ) {
        lampada.src = './src/ligada.jpg'
    }
    }

function desliga() {
    if (!taquebrado () ) { 
        lampada.src = './src/desligada.jpg'
    }
    }

    function quebrado() {
        lampada.src = './src/quebrada.jpg';
    }

function ligadodesligado () {
    if (ligadesliga.textContent == 'Ligar' && !taquebrado()){
        liga();
        ligadesliga.textContent = 'Desligar';
    }
        else{
        desliga();
        ligadesliga.textContent = 'Ligar';
    }

}

ligadesliga.addEventListener('click', ligadodesligado);
lampada.addEventListener('mouseover', liga);
lampada.addEventListener('mouseleave', desliga);
lampada.addEventListener('dblclick', quebrado);