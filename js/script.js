// console.log('Button clicked added');
document.getElementById('btn-login').addEventListener('click', function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    // console.log(phoneNumber.value);
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(pinNumber.value);
    if (phoneNumber === '456' && pinNumber === '1234') {
        window.location.href='./home.html';
    }
    else {
        alert('Please enter correct Phone number or Pin');
    }
})