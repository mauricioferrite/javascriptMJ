// DECALRATIONS
var codigo =  1;
var item = "sapato";
var tamanho = 42;
var descricao = "Ideal para correr";
var preco = 134.90;
var disponivel = true;
var endereco = "Av. Adodlfo Portela, 12 - Fundao - Portugal";
var horario = "Apos as 12:00h"

// CREATING ARRAY LITERAL
var array = [1, 2, 3, "Mauricio", "Luca", "Fernanda"];
var array2 = [10, 20, {name: 'Mauricio', surname:'Ferrite'}];

// CREATING ARRAY USING CONSTRUCTOR
var venda = new Array(codigo, {item, tamanho, descricao, preco, disponivel});
var entrega = new Array(venda, {endereco, horario});

// OUTPUT
console.log(array[0]);
console.log(array2[1]);
console.log(venda[1]);
console.log(venda[1].tamanho);
console.log(entrega[1]);
console.log(entrega[1].horario);