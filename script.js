
// const qty = document.getElementById("text").value ;
// console.log(text);
// function dispprice(){
//     let price = 15*qty;
//     document.getElementById("price").innerHTML = price;
//     window.alert("added"+qty+" to your cart for rupees "+price);
// }


// document.getElementById("btn").addEventListener("click",dispprice);

function calculateTotal() {
    const pricePerUnit = 15;
    const quantity = document.getElementById("text").value;
    const totalPrice = pricePerUnit * quantity;

    document.getElementById("price").textContent = "Total price : Rs:"+totalPrice;
    window.alert("added ${quantity}to your cart for rupees ${totalprice} ");
}

document.getElementById("btn").addEventListener("click",calculateTotal);