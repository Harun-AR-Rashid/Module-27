/*
step1:add event listener
 prevent page reload after form submit
step2:get money to be added  to the account balance

*/


document.getElementById('add-event-listener').addEventListener('click', function (event) {
    event.preventDefault();
    const addInputMoney = document.getElementById('input-add-money').value;
    const addPinNumber = document.getElementById('add-pin-number').value;
    if (addPinNumber === '1234') {
        const currentBalance = document.getElementById('current-balance').innerText;
        const addInputMoneyNumber = parseFloat(addInputMoney);
        const currentBalanceNumber = parseFloat(currentBalance);
        const mainBalance = currentBalanceNumber + addInputMoneyNumber;
        document.getElementById('current-balance').innerText = mainBalance;
    }
    else {
        alert('Please use the correct one or try again later!')
    }
})