// Import stylesheets
import './style.css';
let frutas = []
let doces = []
let congelados =[]
let laticinios = []
let comida = ""
let categoria = "";

let adicinarMais = "sim"

while (adicinarMais !="não"){
  adicinarMais = prompt('Você deseja adicionar uma comida na lista de compras? Responda SIM OU NÃO');
  while (adicinarMais != "sim" && adicinarMais != "não"){
    alert('você digitou um comando invalido')
    adicinarMais = prompt('Você deseja adicionar uma comida na lista de compras? Responda SIM OU NÃO' )
  }
  if (adicinarMais === "não"){
    break;
  }

  comida = prompt('Qual comida você deseja inserir?')

  categoria = prompt('Em qual categoria essa comida se encaixa: frutas, laticínios, doces ou congelados?')

  if (categoria === 'frutas'){
    frutas.push(comida)
  }
  else if(categoria === 'laticínios'){
    laticinios.push(comida)
  }
  else if(categoria === 'doces'){
    doces.push(comida)
  }
  else if(categoria === 'congelados'){
    congelados.push(comida)
  }

}

alert(`Lista de compras: \n Frutas: ${frutas} \n Laticínios: ${laticinios} \n Doces: ${doces} \n Congelados: ${congelados}`)

