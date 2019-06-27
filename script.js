var calculator = (idNum1, idNum2, calculation) => {
    let num1    = document.getElementById(idNum1).value;
    let num2    = document.getElementById(idNum2).value;
    let result  = document.getElementById('result');
    let num3    = 0;
    switch (calculation) {
        case 'plus':
            num3 = parseInt(num1) + parseInt(num2);
            result.textContent = num3;
            break;
        case 'minus':
            num3 = parseInt(num1) - parseInt(num2);
            result.textContent = num3;
            break;
        case 'multiply':
            num3 = parseInt(num1) * parseInt(num2);
            result.textContent = num3;
            break;
        case 'divide':
            num3 = parseInt(num1) / parseInt(num2);
            result.textContent = num3;
            break;
        case 'hat':
            num3 = parseInt(num1) ** parseInt(num2);
            result.textContent = num3;
            break;
        default:
            result.textContent = 'undifine';
    }
};

var convertMomney = (moneyId , fromMoneyId , tomomneyId) => {
    let money           = document.getElementById (moneyId).value;
    let fromMoneyId1    = document.getElementById (fromMoneyId);
    let fromMoneyValue  = fromMoneyId1.options[fromMoneyId1.selectedIndex].value;
    let tomomneyId1    = document.getElementById (tomomneyId);
    let tomomneyIdValue  = fromMoneyId1.options[tomomneyId1.selectedIndex].value;
    let result  = document.getElementById('result');
    let temp = parseInt(money) * parseInt(fromMoneyValue);
    result.textContent = (temp / parseInt(tomomneyIdValue))+' '+fromMoneyId1.options[tomomneyId1.selectedIndex].text;
}

