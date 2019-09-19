var nome = "Pedro";
console.log(nome);

nome = undefined;
nome = null;

console.log("undefined = null :" + undefined == null);
console.log("tipo undefined: " + typeof undefined);
console.log("tipo null:"  + typeof null);
console.log("undefined = null :" + undefined === null);

var pessoa = { nome: 'Paulo'};
console.log(pessoa.idade);
console.log(pessoa.idade.value);