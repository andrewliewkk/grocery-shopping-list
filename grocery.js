// DO NOT MODIFY THIS VARIABLE
const shopList = [
    { "item": "bread", "price": 1.60 },
    { "item": "milk", "price": 2.95 },
    { "item": "butter", "price": 3.50 },
    { "item": "vegetable", "price": 5.80 },
    { "item": "coffee", "price": 3.60 },
    { "item": "tea", "price": 6.50 },
    { "item": "apple", "price": 0.85 }
];

function addItem() {
    // retrieve input
    var item = document.getElementsByTagName("input")[0].value;
    // check if input text field is empty
    if (item.length == 0) {
        document.getElementsByTagName("input")[0].setAttribute("placeholder", "Aiyo! Enter item name!");
    }
    // else: input not empty
    else {

        //check if input is valid item in shopList
        var isValidItem = false;
        for (grocery of shopList) {
            var itemName = grocery.item;
            var itemPrice = grocery.price;
            // valid
            if (itemName == item) {
                isValidItem = true;

                // reset input placeholder
                document.getElementsByTagName("input")[0].setAttribute("placeholder", "Enter item name");

                // create checkbox
                var checkbox = document.createElement("input");

                checkbox.setAttribute("type", "checkbox");
                checkbox.setAttribute("value", item);
                checkbox.setAttribute("price", itemPrice);
                checkbox.setAttribute("id", item);
                checkbox.setAttribute("class", "items")

                // create label
                var label = document.createElement("label");
                checkbox.setAttribute("for", item);
                label.innerHTML = "&nbsp" + item;

                // retrieve and append checkbox and label
                var form = document.getElementById("checkbox-group");
                form.appendChild(checkbox);
                form.appendChild(label);
                form.append(document.createElement("br"));

                //remove form input after addition
                document.getElementsByTagName("input")[0].value = "";
            }
        }

        //item invalid
        if (!isValidItem) {
            //remove form input after add clicked
            document.getElementsByTagName("input")[0].value = "";
            //change placeholder
            document.getElementsByTagName("input")[0].setAttribute("placeholder", "Sorry! Don't have it!");
        }
    }
}

function processItems() {
    var checkedValue;
    var itemArr = [];
    var items = document.getElementsByClassName("items");

    for (item of items) {
        checkedValue = null;
        if (item.checked) {
            checkedValue = item.value;
            itemArr.push([checkedValue, item.getAttribute("price")]);
        }
    }
    // no checked checkboxes
    if (itemArr.length == 0) {
        document.getElementsByClassName("alert")[0].setAttribute("style", "display: block");
    }

    // valid checkboxes
    else {
        //reset alert
        document.getElementsByClassName("alert")[0].setAttribute("style", "display: none");
        var priceListText = "";
        var totalAmt = 0;
        for (item of itemArr) {
            price = parseFloat(item[1]);
            priceListText += item[0] + " - $" + price.toFixed(2) + "<br>";
            totalAmt += price;
        }
        priceListText += "<br>The total cost is : $" + totalAmt.toFixed(2);
        var priceList = document.getElementById("pricelist");
        priceList.innerHTML = priceListText;
    }

}