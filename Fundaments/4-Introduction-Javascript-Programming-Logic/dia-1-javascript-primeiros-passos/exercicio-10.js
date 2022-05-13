const custoDoProduto = 15;
const valorDeVenda = 24;
let numeroDeVendas = 1000;

const custoTotal = custoDoProduto + (custoDoProduto * 20 / 100);
const lucroDoProduto = valorDeVenda - custoTotal;

const lucroTotal = numeroDeVendas * lucroDoProduto;

if(numeroDeVendas > 0) {
  console.log(lucroTotal);
} else {
  console.log('erro');
}

