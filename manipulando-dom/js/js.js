function selectInputFieldName(){
    var firstName = window.document.getElementById("firstName");
    console.log("Nome");
    console.log("Elemento: " + firstName);
    console.log("Tipo: " + typeof firstName);
    console.log("Tag: " + firstName.tagName);
    console.log("Type: " + firstName.type);
    console.log("Conteudo: " + firstName.value);
    console.log("\n");
    
}

function selectInputFieldLastName(){
    var lastName = window.document.getElementById("lastName");
    console.log("Sobrenome");
    console.log("Elemento: " + lastName);
    console.log("Tipo: " + typeof lastName);
    console.log("Tag: " + lastName.tagName);
    console.log("Type: " + lastName.type);
    console.log("Conteudo: " + lastName.value);
    console.log("\n");
}

function selectInputFieldSelect(){
    var exampleSelect = window.document.getElementById("selectEx");
    console.log("Select Field");
    console.log("Elemento: " + exampleSelect);
    console.log("Tipo: " + typeof exampleSelect);
    console.log("Tag: " + exampleSelect);
    console.log("Type: " + exampleSelect.type);
    console.log("Conteudo: " + exampleSelect.value);
    console.log("\n");
}

function selectInputFieldRadioButtons(){
    var exampleRadio = window.document.querySelectorAll("[name=inlineRadioOptions]");
    console.log(exampleRadio.item.length);
    //var exampleRadio1 = window.document.querySelector("#inlineRadio1");
    //var exampleRadio2 = window.document.querySelector("#inlineRadio2");
    //var exampleRadio3 = window.document.querySelector("#inlineRadio3");
    console.log("Todos os Radios: " + exampleRadio.length);
    console.log("Checked name: " + exampleRadio.item(0).value);
    console.log("Checked name: " + exampleRadio.item(1).value);
    console.log("Checked name: " + exampleRadio.item(2).value);
    /*
    console.log("Checked: " + exampleRadio1.checked);
    console.log("Checked: " + exampleRadio2.checked);
    console.log("Checked: " + exampleRadio3.checked);
    */
    console.log("\n");
}

function getRadioChecked(){
    console.log("Entrou na Function!!!");
    var allRadios = window.document.querySelectorAll("[name=inlineRadioOptions]");
    var radioChecked = "none"
    for (i = 0; i < allRadios.length; i++){
        //console.log(allRadios[i].value);
        //console.log(allRadios[i].checked == true);
        if (allRadios[i].checked == true){
            radioChecked = allRadios[i].value;
            //console.log(radioChecked);
        }
    }
    return console.log("Checked: " + radioChecked);
}

function myFunction() {
    document.getElementById("formBoot").submit();
  }

function sendForm(){
    selectInputFieldName();
    selectInputFieldLastName();
    selectInputFieldSelect();
    selectInputFieldRadioButtons();
    getRadioChecked();
}

sendForm();
