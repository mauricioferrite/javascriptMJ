var txtLiteral = "Texto literal";
var txtConstructor = new String("Texto por constructor");
console.log(txtLiteral);
console.log(txtConstructor.toString());

var numberLiteral = 10;
var numberConstructor = new Number(22);
console.log(numberLiteral);
console.log(numberConstructor.toString());

var booleanLiteral = true;
var booleanConstructor = new Boolean(false);
console.log(booleanLiteral);
console.log(booleanConstructor.toString());