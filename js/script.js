let input = document.getElementById("cidade")

function verificarCidade(){
    const cidade = document.getElementById('cidade').value;
    buscarCidade(cidade)
}

input.addEventListener('keyup', (event) => {
    if(event.key == "Enter"){
        let cidade = document.getElementById("cidade").value;
        buscarCidade(cidade);
    }
})

async function buscarCidade(cidade){
    const key = "c2deb3c5d29409095bf3654bb038a5bd";
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());
    console.log(dados);
    monstrarTela(dados)
}
function monstrarTela(dados){
    document.getElementById('name-city').innerHTML = `tempo em <br>${dados.name}`;
    document.getElementById('graus').innerHTML = `Temperatura: ${Math.floor(dados.main.temp)}ºC`;
    document.getElementById('condicao').innerHTML = dados.weather[0].description;
    document.getElementById('umidade').innerHTML = `umidade: ${dados.main.humidity}%`;
    document.getElementById('img-icon').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}