document.getElementById('8gb-btn').addEventListener('click', function () {
    document.getElementById('memory-cost').innerText = 0;
    updateTotal();
});
document.getElementById('16gb-btn').addEventListener('click', function () {
    document.getElementById('memory-cost').innerText = 180;
    updateTotal();
});

document.getElementById('256gb-btn').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 0;
    updateTotal();
});
document.getElementById('512gb-btn').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 100;
    updateTotal();
});
document.getElementById('1tb-btn').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 180;
    updateTotal();
});

document.getElementById('free-delivery').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = 0;
    updateTotal();
});
document.getElementById('paid-delivery').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = 20;
    updateTotal();
});

function updateTotal() {
    const bestCost = parseInt(document.getElementById('best-cost').innerText);
    const memoryCost = parseInt(document.getElementById('memory-cost').innerText);
    const storageCost = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryCost = parseInt(document.getElementById('delivery-cost').innerText);

    const totalCost = bestCost + memoryCost + storageCost + deliveryCost;
    document.getElementById('total-cost').innerText = totalCost;
    document.getElementById('total-cost-bottom').innerText = totalCost;
}

document.getElementById('promo-btn').addEventListener('click', function () {
    const promoText = document.getElementById('promo-field').value;
    document.getElementById('promo-field').value = '';
    if (promoText == 'stevekaku') {
        const currentTotal = parseInt(document.getElementById('total-cost').innerText);
        const bottomTotal = parseInt(document.getElementById('total-cost-bottom').innerText);
        if (currentTotal == bottomTotal) {
            const newTotal = bottomTotal * 0.8;
            document.getElementById('total-cost-bottom').innerText = newTotal;
        }
        else {
            alert('The promo code has already been applied!');
        }
    }
    else {
        alert('Incorrect promo code !!!');
    }
});