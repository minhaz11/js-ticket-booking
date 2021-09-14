var subTotal = document.getElementById('sub-total');
var total = document.getElementById('total');
var vatElement = document.getElementById('vat');

function clickHandler(id,minus = false) { 
    var element = document.getElementById(id);

    if(minus){
        if(element.value > 0){
            element.value  = parseInt(element.value) - 1;
            totalCalculation(id,true)
        } else{
            element.value = 0;
        }
         
    } else{
        element.value  = parseInt(element.value)+1; 
        totalCalculation(id)
    }

}



function totalCalculation(id,minus = false){

    if(id == 'first-class'){
        var price = 150;
    } else {
        var price = 100;
    }

    const vat = 10;

    if(minus){
        subTotal.innerText = parseFloat(subTotal.innerText) - price;
    } else {
        subTotal.innerText = parseFloat(subTotal.innerText) + price ;
    }

    var vatCalc =  parseFloat(subTotal.innerText) * vat/100

    vatElement.innerText = vatCalc;

    total.innerText =  parseFloat(subTotal.innerText) + vatCalc;
}


var button = document.getElementById('book');
button.addEventListener('click',function () { 
  
    if(total.innerText == 0){

       alert('Please select the ticket quantity first.')

    } else{
        alert(
            `Thank you for being with us. Total Price is $${total.innerText} including 10% VAT.`
            
        )
    }
})