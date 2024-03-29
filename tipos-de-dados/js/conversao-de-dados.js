console.log(5 + 2);
console.log(5 + "2");
console.log(6 / 2);
console.log(6 / "2");
console.log("6" / "2");
console.log("6" / {valor: 2});

var dataArray = ["Maria", "5.6", 1, 0 ,-0, -1, 10, 10.5, true, false, null, undefined, NaN, Infinity, -Infinity, [],
[1, 2, "C#"], function(){return 10;}];

transformType(dataArray);

function transformType(tipos){
  try{
    for(var index = 0; index < tipos.length; index++){
      var tipo = tipos[index];
      console.log("### Valor", tipo, "-> Tipo de dado:", typeof tipo);
      console.log("Para String", String(tipo), "- Tipo:", typeof String(tipo));
      console.log("Para Number", Number(tipo), "- Tipo:", typeof Number(tipo));
      console.log("Para Boolean", Boolean(tipo), "- Tipo:", typeof Boolean(tipo));
      console.log("Para Object", Object(tipo), "- Tipo:", typeof Object(tipo));
      console.log("\n");
    }

  }
  catch(error) {
    console.log("Ocorreu um erro!");
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
  }
}