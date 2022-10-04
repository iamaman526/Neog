var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
var btnOutput = document.querySelector("#btn-translate");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

btnOutput.addEventListener("click", handleClick);

function handleClick(){
    var text = txtInput.value;
    fetch(getTranslation(text))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        txtOutput.innerHTML = translatedText;
    })
    .catch(errorHandler);
}

function getTranslation(text){
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("Error!", error);
    alert("Please try again after sometime");
}
