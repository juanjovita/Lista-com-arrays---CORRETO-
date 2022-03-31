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
}

