function incone() {
    const inputIncome = document.getElementById('income').value;
    if (inputIncome >=0 && inputIncome != 'string') {
        const incomeErroe = document.getElementById('income-error');
        incomeErroe.style.display = 'none';
        return inputIncome ;
    }
    else {
        const incomeErroe = document.getElementById('income-error');
        incomeErroe.style.display = 'block';
    }
}


// get calculate
function sumCalculate(food, rent, clothes) {
    const foodCost = document.getElementById(food).value;
    const rentCost = document.getElementById(rent).value;
    const clothesCost = document.getElementById(clothes).value;

    if (typeof parseFloat(foodCost) != 'string' || typeof parseFloat(rentCost) != 'string' || typeof parseFloat(clothesCost) != 'string') {
        if (foodCost >= 0 && rentCost >= 0 && clothesCost >= 0) {
            const totalCost = parseFloat(clothesCost) + parseFloat(rentCost) + parseFloat(foodCost)
            document.getElementById('total-expences').innerText = totalCost;

            const errorCalculate = document.getElementById('error-calculate');
            errorCalculate.style.display = 'none';
        }
        else {
            const errorCalculate = document.getElementById('error-calculate');
            errorCalculate.style.display = 'block';
        }
    }
}


// calculate button event handler 
document.getElementById('calculate').addEventListener('click', function () {
    const sum = sumCalculate('food', 'rent', 'clothes')
    balance();
    incone();
});

// get balance 
function balance() {
    const incomeInput = incone();
    const totalExpences = document.getElementById('total-expences').innerText;
    if (parseFloat(totalExpences) > incomeInput) {
        const errorBalance = document.getElementById('error-balance');
        errorBalance.style.display = 'block';
    }
    else {
        const ToalBalance = parseFloat(incomeInput) - parseFloat(totalExpences);
        const balance = document.getElementById('balance').innerText = ToalBalance;

        const errorBalance = document.getElementById('error-balance');
        errorBalance.style.display = 'none';
        return balance
    }

}

//  saving amount function handling  
function inputSave(){
    const incomeInput = incone()
    const savingInput = document.getElementById('save').value;
    const save = (parseFloat(incomeInput) / 100) * parseFloat(savingInput);

    const PreviousBalance = balance()
    if(save <= PreviousBalance){
        const savingAmount =  document.getElementById('saving-amount');
        const updatesavingAmount = savingAmount.innerText
        savingAmount.innerText = save
        const errorSaving = document.getElementById('error-saving');
        errorSaving.style.display = 'none';
        return updatesavingAmount;
    }
    else{
        const errorSaving = document.getElementById('error-saving');
        errorSaving.style.display = 'block';
    }
}

// Remaining Balance :
function Remaining(){
    const updatesavingAmount = inputSave();
    const PreviousBalance = balance();

    const Remaining = parseFloat(PreviousBalance) - parseFloat(updatesavingAmount);
    document.getElementById('remaining').innerText = Remaining;
}

//  saving amount handling  
document.getElementById('save-button').addEventListener('click', function () {
    const updatesavingAmount = inputSave();
    const PreviousBalance = balance();
    Remaining();
});



 


