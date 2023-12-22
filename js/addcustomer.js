var customerArray = [];
var newCustomer = {}

function addCustomer() {
    var custName = document.getElementById('cust-name').value;
    var custCode = document.getElementById('cust-code').value;
    var custNumber = document.getElementById('cust-number').value;

    newCustomer = {
        name: custCode,
        code: custName,
        price: custNumber,
    };
    customerArray.push(newCustomer)

    var customerSetDiv = document.getElementById('customer-set-div');
    
    var newCustomerDiv = document.createElement('div');
    newCustomerDiv.className = 'col items customer';

    newCustomerDiv.innerHTML = `
        <div class="row customer-info">
            <img src="images/user (1).png" alt="">
            
            <div class="col customer-value">
                <h6 class="store-name">${newCustomer.code}</h6>
                <h6 class="store-code">${newCustomer.name}</h6>
                <h6>${newCustomer.price}</h6>
            </div>
        </div>
        <button class="edit-cust add-cart" onclick="editCustomer(${customerArray.indexOf(newCustomer)})">Edit Customer</button>
        <button class="delete-cust add-cart" onclick="deleteCustomer(${customerArray.indexOf(newCustomer)})">Delete Customer</button>
    `;

    customerSetDiv.appendChild(newCustomerDiv);
    clearInputFields();
}

function deleteCustomer(index) {
    customerArray.splice(index, 1);

    var customerSetDiv = document.getElementById('customer-set-div');
    var customerDivToRemove = customerSetDiv.querySelector('.items.customer');

    if (customerDivToRemove) {
        customerSetDiv.removeChild(customerDivToRemove);
    }
}


function clearInputFields() {
    document.getElementById('cust-name').value = '';
    document.getElementById('cust-code').value = '';
    document.getElementById('cust-number').value = '';
}

function editCustomer(index) {
    var customerToEdit = customerArray[index];

    document.getElementById('cust-name').value = customerToEdit.name;
    document.getElementById('cust-code').value = customerToEdit.code;
    document.getElementById('cust-number').value = customerToEdit.price;

    document.getElementById('customer-view').scrollIntoView();
}
