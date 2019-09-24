var msgvenda = "ESCOPO GLOBAL";
console.log(msgvenda);

function escopo1(){
  var msgvenda = "ESCOPO ESCOPO 1";
  console.log(msgvenda);

  function escopo2(){
    var msgvenda = "ESCOPO ESCOPO 2";
    console.log(msgvenda);
  }
  escopo2();
}
escopo1();
