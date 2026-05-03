let balance = 0.00;

function updateBalance() {
    document.getElementById('balance').innerText = balance.toFixed(2);
}

function addMoney() {
    const amount = parseFloat(document.getElementById('add-amount').value);
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        updateBalance();
        document.getElementById('add-amount').value = '';
    } else {
        alert('Please enter a valid amount to add.');
    }
}

function getMoney() {
    const amount = parseFloat(document.getElementById('get-amount').value);
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalance();
        document.getElementById('get-amount').value = '';
    } else if (amount > balance) {
        alert('Insufficient balance.');
    } else {
        alert('Please enter a valid amount to get.');
    }
}
