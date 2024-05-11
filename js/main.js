function clearTextarea() {
    let input = document.getElementById('input');
    input.value = '';
    let output = document.getElementById('output');
    output.innerHTML = '';
}

function renderingDataMatrix() {
    let inputTextArea = document.getElementById('input');
    let outputTextArea = document.getElementById('output');
    outputTextArea.innerHTML = '';

    let DataMatrix = inputTextArea.value.replace(/\r\n/g,"\n").split("\n");

    let clearDataMatrix = DataMatrixClear(DataMatrix);

    clearDataMatrix.forEach(element => {
        outputTextArea.innerHTML += element;
    })
}


function DataMatrixClear (DataMatrixList) {
    let clearDataMatrix = [];

    DataMatrixList.forEach(element => {
        let arrayDataMatrix = element.split('');

        if (arrayDataMatrix.length != 0) {
           if ((arrayDataMatrix[0] == '0' & arrayDataMatrix[1] == '1') & (arrayDataMatrix[16] == '2' & arrayDataMatrix[17] == '1')) {
                arrayDataMatrix.splice(0, 2, '(', '0', '1', ')');
                arrayDataMatrix.splice(18, 2, '(', '2', '1', ')');

                let cutArrayDataMatrix = arrayDataMatrix.splice(0, 29);
                clearDataMatrix.push("<p onclick=\"CopyText(this)\">" + cutArrayDataMatrix.join("").replaceAll("<", "&lt;") + "</p>\n");
           } else {
                let cutArrayDataMatrix = arrayDataMatrix.splice(0, 21);
                clearDataMatrix.push("<p onclick=\"CopyText(this)\">" + cutArrayDataMatrix.join("").replaceAll("<", "&lt;") + "</p>\n");
           }
        }
    });

    return clearDataMatrix;
}


function CopyText(element) {
    let alertClass = document.querySelector(".p--alert");
    if (alertClass != null) {
        alertClass.classList.remove("p--alert");
    }

    navigator.clipboard.writeText(element.textContent);

    element.classList.add("p--alert");
}