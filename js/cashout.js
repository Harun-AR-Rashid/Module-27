/*
step1:add event listener
 prevent page reload after form submit
step2:get money to be added  to the account balance

*/


document.getElementById('cashout-event-listener').addEventListener('click', function (event) {
    event.preventDefault();
    const addInputMoney = document.getElementById('input-cashout-money').value;
    const addPinNumber = document.getElementById('cashout-pin-number').value;
    if (addPinNumber === '1234') {
        const currentBalance = document.getElementById('current-balance-after-cashout').innerText;
        const addInputMoneyNumber = parseFloat(addInputMoney);
        const currentBalanceNumber = parseFloat(currentBalance);
        const mainBalance = currentBalanceNumber - addInputMoneyNumber;
        document.getElementById('current-balance-after-cashout').innerText = mainBalance;
    }
    else {
        alert('Please use the correct one or try again later!')
    }
})