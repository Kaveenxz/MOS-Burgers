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

            var newItemDiv = document.createElement('div');
            newItemDiv.className = 'col items customer';

            newItemDiv.innerHTML = `
            <div class="row customer-info" id="customer-set-div">
                    <img src="images/user (1).png" alt="">
                    
                    <div class="col customer-value">
                        <h6 class="store-name">C001</h6>
                        <h6 class="store-code">Kumara</h6>
                        <h6>0783872364</h6>
                    </div>
            </div>`;

            document.getElementById('customer-set-div').appendChild(newItemDiv);
            console.log(customerArray)
};

function filterCustomers() {
    var searchInput = document.getElementById("search").value.toLowerCase();
    var customers = document.querySelectorAll('.customers');

    customers.forEach(function (customer) {
        var customerName = customer.querySelector('.customer-info').innerText.toLowerCase();
        var shouldShow = customerName.includes(searchInput);

        customer.style.display = shouldShow ? 'block' : 'none';
    });
}