var myStr = "Curso JS Mestre Jedi";
console.log(myStr.substr(0,5));

// Wrapper
var myStrTemp = "Curso JS Mestre Jedi";
var myStr3 = new String(myStrTemp);
myStrTemp = null;
console.log(myStr3.substr(0, 5));
myStr3 = null;