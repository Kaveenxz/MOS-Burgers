
    function filterItems() {
        var searchInput = document.getElementById("search").value.toLowerCase();
        var items = document.querySelectorAll('.items');

        items.forEach(function (item) {
            var itemName = item.querySelector('.name').innerText.toLowerCase();
            var shouldShow = itemName.includes(searchInput);

            item.style.display = shouldShow ? 'block' : 'none';
        });
    }

    function incrementCount(element) {
        var quantityElement = element.parentElement.querySelector('.quantity');
        var currentQuantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = currentQuantity + 1;
    }

    function decrementCount(element) {
        var quantityElement = element.parentElement.querySelector('.quantity');
        var currentQuantity = parseInt(quantityElement.textContent);
        if (currentQuantity > 0) {
            quantityElement.textContent = currentQuantity - 1;
        }
    }

var selectedItems = [];

function addItemToSelected(item) {
    var itemName = item.querySelector('.name').textContent;
    var itemPrice = parseFloat(item.querySelector('.price').textContent.replace('LKR', ''));
    var itemQty = parseInt(item.querySelector('.quantity').textContent);
    
    var discountElement = item.querySelector('.discount');
    var discount = discountElement ? parseFloat(discountElement.textContent) / 100 : 0;

    var existingItem = selectedItems.find(selected => selected.name === itemName);
    if (existingItem) {
        existingItem.qty += itemQty;
    } else {
        var selected = {
            name: itemName,
            price: itemPrice,
            qty: itemQty,
            discount: discount
        };
        selectedItems.push(selected);
    }

    updatePaymentView();
}

function updatePaymentView() {
    var itemListContainer = document.querySelector('.scrollable-container .item-list');
    var paymentSummary = document.querySelector('.payment');

    itemListContainer.innerHTML = '';
    paymentSummary.innerHTML = '';

    var subTotal = 0;
    var totalDiscount = 0;

    selectedItems.forEach(item => {
        var itemElement = document.createElement('div');
        itemElement.classList.add('item');

        itemElement.innerHTML = `
            <img src="images/b1.jpg" alt="">
            <div class="item-info">
                <h6>${item.name}</h6>
                <h6>${item.price.toFixed(2)}</h6>
                <h6>${item.qty}x</h6>
                <h6>${(item.price * item.qty).toFixed(2)}LKR</h6>
            </div>
        `;

        itemListContainer.appendChild(itemElement);

        subTotal += item.price * item.qty;
        totalDiscount += item.discount * item.price * item.qty;
    });

    var totalPayment = subTotal - totalDiscount;

    paymentSummary.innerHTML = `
        <h5>Payment Summary</h5>
        <h6><span>Sub total</span><span>${subTotal.toFixed(2)}</span></h6>
        <h6><span>Discount</span><span>${totalDiscount.toFixed(2)}</span></h6>
        <h6><span>Total Payment</span><span>${totalPayment.toFixed(2)}LKR</span></h6>
    `;
}

function placeOrder() {
    var orderDetails = {
        customerName: document.getElementById('name').value,
        customerTeleNumber: document.getElementById('password').value,
        totalPayment: document.getElementById('total-payment').value
    };

    console.log(orderDetails);

    selectedItems = [];
    updateSelectedItemList();
    updatePaymentSummary();
}
function addItemToSelected(item) {
    var itemName = item.querySelector('.name').textContent;
    var itemPrice = parseFloat(item.querySelector('.price').textContent.replace('LKR', ''));
    var itemQty = parseInt(item.querySelector('.quantity').textContent);
    var discount = item.querySelector('.discount') ? 0.15 : 0; 

    var existingItem = selectedItems.find(selected => selected.name === itemName);
    if (existingItem) {
        existingItem.qty += itemQty;
    } else {
        var selected = {
            name: itemName,
            price: itemPrice,
            qty: itemQty,
            discount: discount
        };
        selectedItems.push(selected);
    }
    updatePaymentView();
}
