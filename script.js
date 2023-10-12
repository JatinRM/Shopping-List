var button = document.querySelector("#enter");
var input = document.querySelector("#userinput");
var ol = document.querySelector("ol")

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ol.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0 ){
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.key === "Enter" ){
     createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterKeypress);
