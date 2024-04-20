function clearTextarea() {
    let input = document.getElementById('input');
    input.value = '';
    let output = document.getElementById('output');
    output.value = '';
}

function renderingDataMatrix() {
    let input = document.getElementById('input');
    let DataMatrix = input.value.replace(/\r\n/g,"\n").split("\n");

    let clearDataMatrix = []

    DataMatrix.forEach(element => {
        let arrayDataMatrix = element.split('');
        if (arrayDataMatrix.length != 0) {
           if ((arrayDataMatrix[0] == '0' & arrayDataMatrix[1] == '1') & (arrayDataMatrix[16] == '2' & arrayDataMatrix[17] == '1')) {
                arrayDataMatrix.splice(0, 2, '(', '0', '1', ')');
                arrayDataMatrix.splice(18, 2, '(', '2', '1', ')');

                let cutArrayDataMatrix = arrayDataMatrix.splice(0, 29);
                clearDataMatrix.push(cutArrayDataMatrix.join("") + "\n");
           } else {
                let cutArrayDataMatrix = arrayDataMatrix.splice(0, 21);
                clearDataMatrix.push(cutArrayDataMatrix.join("") + "\n");
           }
        }
    });

    let outputTextArea = document.getElementById('output');
    clearDataMatrix.forEach(element => {
        outputTextArea.value += element;
    })
}