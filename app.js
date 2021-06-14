var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTransalationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try after sometime")
}
//outputDiv.innerText = "adarsh"  //writing value

//console.log(outputDiv);

function clickHandler() {

    var inputText = txtInput.value; //taking input

    fetch(getTransalationURL(inputText)) //calling server for processing
        .then(response => response.json())
        //.then(json => console.log(json.contents.translated))
        .then(json =>{
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
    // outputDiv.innerText = "this is output! " + txtInput.value;
    // console.log("clicked");
    // console.log("input", txtInput.value); //reding value
}

btnTranslate.addEventListener("click", clickHandler)