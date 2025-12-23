let listaDeProdutos = document.getElementById('lista-produtos');
let valorDaCompra = document.getElementById('valor-total');
let valorDaSomaTotal = 0;    

window.onload = function esvaziar() {
listaDeProdutos.innerHTML = [''];
valorDaCompra.innerHTML = [''];
}

function adicionar() {
    let produtosParaVenda = document.getElementById('produto').value;
    let valorDeProduto = produtosParaVenda.split('R$');
    let produtoEmSi = produtosParaVenda.split('-');
    let quantidadeDeProdutos = (document.getElementById('quantidade').value);
    let valorDaSoma = quantidadeDeProdutos * valorDeProduto[1];
valorDaSomaTotal = valorDaSomaTotal + valorDaSoma;
valorDaCompra.textContent = `R$${valorDaSomaTotal}`;
if (quantidadeDeProdutos <= 0) {
    alert ('A quantidade de produto não foi escolhida');
    return;
}
    let noCarinho = [];
noCarinho.push(` <section class="carrinho__produtos__produto"><span class="texto-azul">${quantidadeDeProdutos}x</span> ${produtoEmSi[0]} <span class="texto-azul">R$${valorDeProduto[1]}</span></section>`);
    let produtosExistentes = listaDeProdutos.innerHTML;
    let produtoExibido = produtosExistentes.split(',');
if (produtoExibido.length > 0) {
    noCarinho.unshift(produtoExibido);
}
listaDeProdutos.innerHTML = noCarinho.join('</section>');
(document.getElementById('quantidade').value) = 1;
}

function limpar() {
listaDeProdutos.innerHTML = [''];
valorDaCompra.innerHTML = [''];
valorDaSomaTotal = 0;
}