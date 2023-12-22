var itemArray= []
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

            var newItem = {
                name: itemName,
                code: itemCode,
                price: itemPrice,
                date: itemDate,
                discount: itemDiscount,
                imgSrc: itemImgSrc,
                index: itemArray.length
            };

            itemArray.push(newItem);

            var newItemDiv = document.createElement('div');
            newItemDiv.className = 'col items';
            newItemDiv.dataset.index = newItem.index; 

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
                </div>
                <button class="edit-item add-cart" onclick="editItem(${newItem.index})">Edit Item</button>
                <button class="delete-item add-cart" onclick="deleteItem(${newItem.index})">Delete Item</button>
            `;

            document.getElementById('items-set-div').appendChild(newItemDiv);
            console.log(itemArray);
            clearInputFields();
        };

        reader.readAsDataURL(itemImgFile);
    } else {
        alert('Please select an image file.');
    }
}

function deleteItem(index) {
    itemArray.splice(index, 1);

    var itemsSetDiv = document.getElementById('items-set-div');
    var itemDivToRemove = itemsSetDiv.querySelector(`[data-index='${index}']`);

    if (itemDivToRemove) {
        itemsSetDiv.removeChild(itemDivToRemove);
    }
}
function clearInputFields() {
    document.getElementById('item-name').value = '';
    document.getElementById('item-code').value = '';
    document.getElementById('item-price').value = '';
    document.getElementById('item-date').value = '';
    document.getElementById('item-discount').value = '';
    document.getElementById('item-image').value = '';
}
function editItem(index) {
    var itemToEdit = itemArray[index];

    document.getElementById('item-name').value = itemToEdit.name;
    document.getElementById('item-code').value = itemToEdit.code;
    document.getElementById('item-price').value = itemToEdit.price;
    document.getElementById('item-date').value = itemToEdit.date;
    document.getElementById('item-discount').value = itemToEdit.discount;

     document.getElementById('item-image').files[0] = itemToEdit.imgSrc;

    document.getElementById('price-view').scrollIntoView();
}

function handleEditButton() {
    itemArray[index] = {
        name: document.getElementById('item-name').value,
        code: document.getElementById('item-code').value,
        price: document.getElementById('item-price').value,
        date: document.getElementById('item-date').value,
        discount: document.getElementById('item-discount').value,
       
    };

   clearInputFields();
   
}
