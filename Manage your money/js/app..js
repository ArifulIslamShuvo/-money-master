
// get calculate
function sumCalculate(food, rent, clothes){
    const foodCost = document.getElementById(food).value;
    const rentCost = document.getElementById(rent).value;
    const clothesCost = document.getElementById(clothes).value;

    const totalCost = parseFloat(clothesCost) + parseFloat(rentCost) + parseFloat(foodCost)
    document.getElementById('total-expences').innerText = totalCost;


}

document.getElementById('calculate').addEventListener('click', function () {
   const sum = sumCalculate('food', 'rent', 'clothes')

});

