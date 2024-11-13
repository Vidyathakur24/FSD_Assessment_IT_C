function addToCart() {
    const quantity = document.getElementById("quantity").value;
    const totalPrice = quantity * 15;

    document.getElementById("total-price").innerHTML = `Total Price: Rs. ${totalPrice}`;

    alert(`You added ${quantity} item(s) to your cart for Rs. ${totalPrice}`);
}
