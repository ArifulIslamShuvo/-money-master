
// get calculate
function sumCalculate(food, rent, clothes) {
    const foodCost = document.getElementById(food).value;
    const rentCost = document.getElementById(rent).value;
    const clothesCost = document.getElementById(clothes).value;

    if (typeof parseFloat(foodCost) != 'string' || typeof parseFloat(rentCost) != 'string' || typeof parseFloat(clothesCost) != 'string') {
        if (foodCost >= 0 && rentCost >= 0 && clothesCost >= 0) {
            const totalCost = parseFloat(clothesCost) + parseFloat(rentCost) + parseFloat(foodCost)
            document.getElementById('total-expences').innerText = totalCost;  
        }
        else {
            alert('Please Enter a Positive Number')
        }
    }
}

// get balance 
function balance() {
    const incomeAmount = document.getElementById('income').value;
    const totalExpences = document.getElementById('total-expences').innerText;
    const ToalBalance = parseFloat(incomeAmount) - parseFloat(totalExpences);
    document.getElementById('balance').innerText = ToalBalance;

}

// calculate button event handler 
document.getElementById('calculate').addEventListener('click', function () {
    const sum = sumCalculate('food', 'rent', 'clothes')
    balance()
});







