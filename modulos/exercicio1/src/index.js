const Planet = require('./planet');
const operation = require('./operations');

let planetas = [];
planetas.push(new Planet("Mercurio", 0.39));
planetas.push(new Planet("Venus", 0.72));
planetas.push(new Planet("Terra", 1));
planetas.push(new Planet("Marte", 1.52));
planetas.push(new Planet("Júpiter", 5.2));
planetas.push(new Planet("Saturno", 9.53));
planetas.push(new Planet("Urano", 19.1));
planetas.push(new Planet("Neturno", 30));

planetas.forEach((planeta) => {
    let distancia = operation.converterDistancia(planeta.unidadeAstronomica);

    console.log(`${planeta.name}:\nUA = ${planeta.unidadeAstronomica}\nKM = ${distancia.toFixed(2)}`);
})