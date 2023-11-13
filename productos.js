
    var cart = {};

    function addToCart(product, price) {
        if (cart[product]) {
            cart[product].quantity++;
        } else {
            cart[product] = {
                price: price,
                quantity: 1
            };
        }

        updateCartTable();
    }

    function updateCartTable() {
        var cartTable = document.getElementById('cart');
        cartTable.innerHTML = '<tr><th>Producto</th><th>Precio</th><th>Cantidad</th></tr>';
        for (var product in cart) {
            var row = cartTable.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);

            cell1.innerHTML = product;
            cell2.innerHTML = '$' + cart[product].price;
            cell3.innerHTML = cart[product].quantity;
        }
    }
    function toggleCart() {
        var cartTable = document.getElementById('cart-container');
        cartTable.style.display = cartTable.style.display === 'none' ? 'table' : 'none';
    }