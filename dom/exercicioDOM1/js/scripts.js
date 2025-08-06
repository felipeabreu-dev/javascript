class House {
    constructor(bairro, cidade, numeroCasa, areaCasa) {
        this.bairro = bairro;
        this.cidade = cidade;
        this.numeroCasa = numeroCasa;
        this.areaCasa = areaCasa;
    }
}

function adicionarCasa() {
    let bairro = document.getElementById("ibairro").value;
    let cidade = document.getElementById("icidade").value;
    let numCasa = document.getElementById("inumerocasa").value;
    let areaCasa = document.getElementById("iareaCasa").value;

    let casa = new House(bairro, cidade, numCasa, areaCasa);

    const lista = document.querySelector("div ul");
    let itemLista = document.createElement('li');
    itemLista.textContent = casa.areaCasa + "m²,número " + casa.numeroCasa + "(" + casa.bairro + " - " + casa.cidade + ")";
    

    let btnRemover = document.createElement("button");
    btnRemover.setAttribute("onclick", "removerCasa(this)");
    btnRemover.textContent = "Remover";
    itemLista.appendChild(btnRemover);
    lista.appendChild(itemLista);

    document.getElementById("ibairro").value = '';
    document.getElementById("icidade").value = '';
    document.getElementById("inumerocasa").value = '';
    document.getElementById("iareaCasa").value = '';
}

function removerCasa(button) {
    const lista = document.querySelector("div ul");
    let itemLista = button.parentNode;
    lista.removeChild(itemLista);
}