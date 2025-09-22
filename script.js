let chave = "1aa1df67d6f9908150068c7ee26ea34c";

function clique() {
    let cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade);
}

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
async function buscarCidade(cidade) {
    if (cidade != "") {
        let dados = await fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            cidade +
            "&appid=" +
            chave +
            "&lang=pt_br" +
            "&units=metric")
            .then(res => res.json())
        console.log(dados);
        colocaNaTela(dados);
    }
    else {
        document.querySelector(".cidade").innerHTML = "Reinicie a página e insira uma cidade.";
        document.querySelector(".temp").innerHTML = "";
        document.querySelector(".descricao").innerHTML = "";
        document.querySelector(".umidade").innerHTML = "";
        document.querySelector(".img").src = "";
    }
}

function colocaNaTela(dados) {

    if (dados.message != "city not found") {
        document.querySelector(".nome-cidade").innerHTML = dados.name;
        document.querySelector(".temp-cidade").innerHTML = Math.round(dados.main.temp);
        document.querySelector(".desc-cidade").innerHTML = dados.weather[0].description;
        document.querySelector(".umidade-cidade").innerHTML = dados.main.humidity;
    }
    else {
        document.querySelector(".cidade").textContent = "Cidade inválida, reinicie a página e tente novamente.";
        document.querySelector(".temp").textContent = "";
        document.querySelector(".descricao").innerHTML = "";
        document.querySelector(".umidade").innerHTML = "";
    }
}