function linkText() {
    var linkText = document.getElementById('linkText').value;
    document.getElementById('duplicateField').innerHTML = linkText;
}

const outPut = document.querySelector('#outPut');

outPut.addEventListener('click', function (event) {
    var consoleText = document.getElementById('linkText').value;
    console.log(consoleText);
    document.getElementById("linkText").value = "";
    document.getElementById('duplicateField').innerHTML = "";
})