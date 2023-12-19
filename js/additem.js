var itemArray = [];
function addItem() {
    var itemName = document.getElementById('item-name').value;
    var itemCode = document.getElementById('item-code').value;
    var itemPrice = document.getElementById('item-price').value;
    var itemDate = document.getElementById('item-date').value;
    var itemDiscount = document.getElementById('item-discount').value;
    var itemImg = document.getElementById('item-image');

    if (itemImg.files.length > 0) {
        var itemImgFile = itemImg.files[0];

        var reader = new FileReader();
        reader.onload = function (e) {
            var itemImgSrc = e.target.result;

            newItem = {
                name: itemName,
                code: itemCode,
                price: itemPrice,
                date: itemDate,
                discount: itemDiscount,
                imgSrc: itemImgSrc
            };
            itemArray.push(newItem)

            var newItemDiv = document.createElement('div');
            newItemDiv.className = 'col items';

            newItemDiv.innerHTML = `
                <img src="${itemImgSrc}" alt="" id="store-img">
                <div class="row store-info">
                    <div class="col store-lbl">
                        <h6>Name</h6>
                        <h6>Code</h6>
                        <h6>Price</h6>
                        <h6>Date</h6>
                        <h6>Discount</h6>
                    </div>
                    <div class="col store-value">
                        <h6 class="store-name" id="store-name">${itemName}</h6>
                        <h6 class="store-code" id="store-code">${itemCode}</h6>
                        <h6 class="store-price" id="store-price">${itemPrice}LKR</h6>
                        <h6 class="store-date" id="store-date">${itemDate}</h6>
                        <h6 class="store-discount" id="store-discount">${itemDiscount}%</h6>
                    </div>
                </div>`;

            document.getElementById('items-set-div').appendChild(newItemDiv);
            console.log(itemArray)
        };

        reader.readAsDataURL(itemImgFile);
    } else {
        alert('Please select an image file.');
    }
}

function filterItems() {
    var searchInput = document.getElementById("search").value.toLowerCase();
    var items = document.querySelectorAll('.items');

    items.forEach(function (item) {
        var itemName = item.querySelector('.store-name').innerText.toLowerCase();
        var shouldShow = itemName.includes(searchInput);

        item.style.display = shouldShow ? 'block' : 'none';
    });
}
function onItemClick(item) {
    // Get the data from the clicked item using data attributes
    var itemName = item.dataset.name;
    var itemCode = item.dataset.code;
    var itemPrice = item.dataset.price;
    var itemDate = item.dataset.date;
    var itemDiscount = item.dataset.discount;
    var itemImgSrc = item.dataset.img;

    // Update the price view input fields
    document.getElementById('item-name').value = itemName;
    document.getElementById('item-code').value = itemCode;
    document.getElementById('item-price').value = parseFloat(itemPrice);
    document.getElementById('item-date').value = itemDate;
    document.getElementById('item-discount').value = parseInt(itemDiscount);

    // You can also update the image source in the price view
    document.getElementById('item-img').src = itemImgSrc;
}

// Add click event listeners to each item
var items = document.querySelectorAll('.col.items');
items.forEach(function(item) {
    item.addEventListener('click', function() {
        onItemClick(item);
    });
});