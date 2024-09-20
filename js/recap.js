document.getElementById('add-event-listener').addEventListener('click', function (event) {
    event.preventDefault();
    const inputAmount = document.getElementById('input-add-money').value;
    const inputAmountNumber = parseFloat(inputAmount);
    const inputPin = document.getElementById('add-pin-number').value;
    if (inputPin === '1234') {
        const accountBalance = document.getElementById('current-balance').innerText;
        const accountBalanceNumber = parseFloat(accountBalance);
        newBalance = inputAmountNumber + accountBalanceNumber;
        document.getElementById('current-balance').innerText = newBalance;
    }
    else {
        alert('Invalid Information or Please try again later!!');
    }
});