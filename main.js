var registerForm = document.querySelector(".registerForm");
var exchange = document.querySelector(".exchange");
var amount = document.querySelector(".amount");
registerForm.onsubmit = function (e) {
  e.preventDefault();
  console.log(exchange);
var result ="";

if (exchange.value == "USD"){
result =  amount.value * 3.5 ;
}
else if (exchange.value == "JOD"){
    result =  amount.value * 5.25 ;
}
else{
    result =  amount.value*1 ;
}

document.querySelector(".results").innerHTML = result;
};



