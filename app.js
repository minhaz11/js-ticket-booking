var firstClassPrice = 150;
var economyPrice = 100;
var vat = 10;

var subTotal = document.getElementById('sub-total');
var total = document.getElementById('total');
var vatElement = document.getElementById('vat');

function firstClassClick(minus = false) { 
    var firstClass = document.getElementById('first-class');

    if(minus){
        if(firstClass.value > 0){
            firstClass.value  = parseInt(firstClass.value || 0) - 1;
            totalCalculation(firstClass.value,true)
        } else{
            firstClass.value = 0;
        }
         
    } else{
        firstClass.value  = parseInt(firstClass.value || 0)+1; 
        totalCalculation(firstClass.value)
    }

    function totalCalculation(value,minus = false){

        if(minus){
            subTotal.innerText = parseFloat(subTotal.innerText) - (firstClassPrice * value);
        } else {
            subTotal.innerText = parseFloat(subTotal.innerText) + (firstClassPrice * value);
        }

        var vatCalc =  parseFloat(subTotal.innerText) * vat/100
    
        vatElement.innerText = vatCalc;

        total.innerText =  parseFloat(subTotal.innerText) + vatCalc;
       
    }

}
