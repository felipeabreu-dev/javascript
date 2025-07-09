// Manipulação de Datas 

// COMANDO BASE PARA PEGAR A DATA 
let data = new Date();
// console.log(data);

// PEGA O ANO ATUAL, 4 DÍGITOS
let ano = data.getFullYear();
// console.log(ano);

// PEGAR O MES ATUAL - DE 0 A 11, SENDO 0 JANEIRO E 11 DEZEMBRO
let mes = data.getMonth();
// console.log(mes);

const mesesDoAno = ["Janeiro", "Fevereiro", "Maio", "Abril", "Março", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

let mesPorEscrito = mesesDoAno[mes];
console.log(mesPorEscrito)

// PEGAR O DIA DO MES
let diaDoMes = data.getDate();
console.log(diaDoMes);

// PEGAR O DIA DA SEMANA - 0 até 6
let diaDaSemana = data.getDay();
console.log(diaDaSemana);

const diasDaSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
let diaDaSemanaEscrito = diasDaSemana[diaDaSemana];
console.log(diaDaSemanaEscrito)

// PEGAR HORA DO DIA - DE 0 A 23
let hora = data.getHours();
console.log(hora);

// PEGAR MINUTOS - DE 0 A 59
let minutos = data.getMinutes();
console.log(minutos);

// PEGAR SEGUNDOS - DE 0 A 59
let segundos = data.getSeconds();
console.log(segundos);

// PEGAR MILISEGUNDOS - 0 A 999
let milisegundos = data.getMilliseconds();
console.log(milisegundos);

// PEGAR A DATA NO PADRÃO BRASILEIRO - DIA / MES / ANO
let dataBR = data.toLocaleString('pt-BR', {dateStyle: "short"}); 
/** 
 * PEGA SOMENTE A DATA, ESTUDAR MAIS SOBRE AS OPÇÕES DISPONÍVEIS
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString 
 * 
 */
console.log(dataBR);

// DIFERENÇA ENTRE DUAS DATAS
let dataInicial = new Date();
let dataFinal = new Date(2026, 6, 7);

let diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
let diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));
console.log(diferencaDias);