const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001
}

// //CONVERTE PARA TEXTO
// let texto = JSON.stringify(carro);

// document.getElementById('area').innerHTML = texto;
// console.log(JSON.stringify(carro.modelo));

// // CONVERTE TEXTO EM UM OBJETO JSON
// let obj = JSON.parse(texto);
// console.log(obj.marca);

// // FAZENDO UMA REQUISIÇÃO EM API
// const ajax = new XMLHttpRequest();
// ajax.open('GET', 'https://viacep.com.br/ws/62200000/json/')
// ajax.send();

// ajax.onload = function(){
//     document.getElementById('area').innerHTML = this.responseText;
//     let obj = JSON.parse(this.responseText);
//     window.alert(obj.localidade);
// }


function buscarCep(){
    let cep = document.getElementById('cepPesquisa').value;

    const pesquisa = new XMLHttpRequest;
    pesquisa.open('GET', 'https://viacep.com.br/ws/' + cep + '/json/');
    pesquisa.send();

    pesquisa.onload = function(){
        document.getElementById('texto').innerHTML = this.responseText;
    }
}