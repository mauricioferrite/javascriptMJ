var expressionLit = /js/;
var expressionConst = new RegExp("Jedi");

var expressionText = "Formacao Curso Mestre JS Mestre Jedi";

console.log(expressionLit.test(expressionText));
console.log(expressionConst.exec(expressionText));
