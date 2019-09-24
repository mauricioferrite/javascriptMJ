console.log("linha 1");
console.log("linha 2");
//throw new Error("Novo erro!");
console.log("linha 3");

try {
  
  console.log(soma(10, new Array(10)));

} catch (error) {
  
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);

} finally {

  console.log("Sempre sera executado!");

}

function soma(a,b) {
  //a + b;
  //a / b;
  return a.exec(20);
}