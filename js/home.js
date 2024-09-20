/*
step1:add event listener
 prevent page reload after form submit
step2:get money to be added  to the account balance

*/


document.getElementById('add-event-listener').addEventListener('click', function(event){
    event.preventDefault();
    const addInputMoney=document.getElementById('input-add-money').value;
    console.log(addInputMoney);
    const addPinNumber=document.getElementById('add-pin-number').value;
    console.log(addPinNumber);
})