var objeto = {item1: 1, item2: 2, item3: 3};
var pessoa = {
  nome: "Mauricio",
  idade: 38,
  altura: 1.73,
  peso: 90
};
console.log(objeto);
console.log(pessoa.nome + " tem " + pessoa.idade + " anos.");

var pessoa2 = new Object();
  pessoa2.nome = "Carlos";
  pessoa2.idade =  53;
  pessoa2.altura =  1.68;
  pessoa2.peso =  80;
console.log(pessoa2);
console.log(pessoa2.nome + " tem " + pessoa2['idade'] + " anos.");

var produto = new Object();
  produto.codigo = 1;
  produto.nome = "Praia";
  produto.tipo = {1: "Bolsa", 2: "Colar", 3: "Pulseira", 4: "Anel"};
  produto.preco = 20.90;
  produto.largura = 15;
  produto.altura = 15;
  produto.peso = 15;
  produto.imagem = "Image";
console.log(produto);
console.log("Moda " + produto.nome + " temos varias opcoes em " + produto.tipo[1] + " a e acessorios.");
console.log("Para " + produto["nome"] + " temos varias opcoes em " + produto.tipo[4] + " a e acessorios.");