function foramatarTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}

function contagem() {
    const horaAtual = new Date();
    const horas = 23 - horaAtual.getHours();
    const minutos = 59 - horaAtual.getMinutes();
    const segundos = 59 - horaAtual.getSeconds();

    const relogio = document.getElementById('contagem-relogio');
    
    relogio.innerHTML = `${foramatarTempo(horas)}:${foramatarTempo(minutos)}:${foramatarTempo(segundos)}`;
}

function estilizacao() {
    const ofertas = document.getElementById('ofertas');

    ofertas.style.width = "220px"
    ofertas.style.height = "30px"
    ofertas.style.display = "flex"
    ofertas.style.alignItems = "center"
    ofertas.style.justifyContent = "center"
    ofertas.style.backgroundColor = "#fff"
    ofertas.style.opacity = "0.5"
    ofertas.style.margin = "-30px 0 0 40px"
    ofertas.style.borderRadius = "7px"
}
estilizacao();

setInterval(() => {
    contagem();
}, 1000);