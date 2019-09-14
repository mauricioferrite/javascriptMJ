//funcional

//POO
var objPessoa = {
  nome: "Mauricio",
  cargo: "Consultant",
  metodo: function(){
    console.log("Metodo Chamado!!!");
  }
}

console.log("Exibindo o objeto inteiro:");
console.log(objPessoa);
console.log("//////////");
console.log("Exibindo nome e cargo:");
console.log("Nome: " + objPessoa.nome + " . Cargo: " + objPessoa.cargo);
console.log("//////////");
console.log("Chamando o metodo:");
objPessoa.metodo();
