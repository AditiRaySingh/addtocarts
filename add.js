let total = 0;

function addToCart(name, price) {
    total += price;

    let p = document.createElement("p");
    p.innerHTML = `${name} : ₹${price} 
        <button onclick="removeItem(this, ${price})">Remove</button>`;
    cartBox.appendChild(p);

    totalPrice.innerText = total;
}

function removeItem(btn, price) {
    btn.parentElement.remove();
    total -= price;
    totalPrice.innerText = total;
}
