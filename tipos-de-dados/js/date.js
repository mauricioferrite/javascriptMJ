// WORKING WITH DATES

var data = new Date();

function exibeMes() {
  realMonth = data.getMonth() + 1;
  switch (realMonth) {
    case 1:
      month = "January";
      break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
        month = "June";
        break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
        month = "December";
        break;
  }
  return month;
}

function exibeDia() {
  realDay = data.getDay();
  switch (realDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 4:
      day = "Tuesday";
      break;
    case 5:
      day = "Wednesday";
      break;
    case 6:
      day = "Friday";
        break;
    case 7:
      day = "Saturday";
      break;
    case 8:
      day = "Sunday";
      break;
  }
  return day;
}

console.log("Exibindo a data atual: " + data);
console.log("Dia da Semana: " + data.getDay());
console.log("Dia da Semana: " + exibeDia());
console.log("Dia do Mes: " + data.getDate());
console.log("Mes: " + exibeMes());
console.log(data.getHours());

