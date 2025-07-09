class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    buzinar(){
        window.alert("Biiiiiiiiiiiiiiii")
    }
}

const btnEnviar = document.getElementById("btn_enviar");
const mostraDados = document.getElementById("mostraDados");
mostraDados.innerText = "";

btnEnviar.addEventListener("click", resgatarDados());

function resgatarDados() {
    let marca = document.getElementById("id_marca").value;
    let modelo = document.getElementById("id_modelo").value;
    let ano = document.getElementById("id_ano").value;

    let carro = new Carro(marca, modelo, ano);

    mostraDados.innerText = 
    "O seu carro é da marca: " + carro.marca
    + "\nModelo: " + carro.modelo
    + "\nAno: " + carro.ano ;
}