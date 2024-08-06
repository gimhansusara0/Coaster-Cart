console.log("Starting System")
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favouriteItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];

const products = [
    {name: "Avocado", pricePerKg: 640},
    {name: "Banana", pricePerKg: 200},
    {name: "Grapes", pricePerKg: 700},
    {name: "Oranges", pricePerKg: 500},
    {name: "Papaya", pricePerKg: 640},
    {name: "Water Melon", pricePerKg: 680},
    {name: "Carrots", pricePerKg: 670}
];

function addToCart(productIndex){
    const amount = parseFloat(document.getElementById(`amount-${productIndex}`).value);
    if (isNaN(amount) || amount <= 0) {
        alert("Enter a valid number");
        return;
    }
    const product = {
        name: products[productIndex].name,
        amount: amount,
        pricePerKg: products[productIndex].pricePerKg,
        total: amount * products[productIndex].pricePerKg,
        favourites: false
    };

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartTable();
    console.log("Product Added")
}



function updateCartTable(){
    const tbody = document.getElementById("cart-table").getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''
    let total = 0;
    cart.forEach((item, index) => {
        const row = tbody.insertRow();
        row.insertCell(0).innerHTML = item.name;
        const amountCell = row.insertCell(1);
        amountCell.innerHTML = `<input type="number" value="${item.amount}" onchange="updateAmount(${index}, this.value)">`;
        row.insertCell(2).innerText = item.pricePerKg.toFixed(2);
        row.insertCell(3).innerText = item.total.toFixed(2);
        const favouriteCell = row.insertCell(4);
        favouriteCell.innerHTML = `<input type="checkbox" ${item.favorite ? 'checked' : ''} onchange="toggleFavorite(${index})">`;
        total += item.total;
        
    });

    console.log(total);
    const rowTwo = tbody.insertRow();
    rowTwo.insertCell(0).innerText = "TOTAL";
    rowTwo.insertCell(1).innerText = `${total}`;
}

function updateAmount(index, newAmount){
    const amount = parseFloat(newAmount);
    if (isNaN(amount) || amount <= 0){
        alert('Please enter a valid amount');
        return;
    }

    cart[index].amount = amount;
    cart[index].total = amount * cart[index].pricePerKg;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartTable();
}


updateCartTable()