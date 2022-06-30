let product = "";
let payments = "";
let keepBuying = false;
let totalWithIVA = 0;
let productsChosen = "";
let totalWithFees = 0;
let flatAmount = 0;
let iva = 0;


const addition = (a, b) => a + b;
const shoppingCart = [];

const products = [
    {id: 1, name: "Placa de video NVIDIA", price: 200000, amount: 1} ,
    {id: 2, name: "Placa de video AMD", price: 150000, amount: 1} ,
    {id: 3, name: "Procesador INTEL", price: 100000, amount: 1} ,
    {id: 4, name: "Procesador AMD", price: 90000, amount: 1} ,
    {id: 5, name: "Placa madre", price: 60000, amount: 1} 
];


function addToCart(id) {

    let product = products.find(product => product.id === id);

    let productInCart = shoppingCart.find(product => product.id === id);

    if (productInCart) {

        productInCart.amount++;
    } else {

        product.amount = 1;
        shoppingCart.push(product);
        console.log(shoppingCart);
    }
}

do {
    productsChosen = prompt("Bienvenido a Gamma Tech Shop \n \n Escriba el número del producto que desea \n   Para cancelar la compra, escriba 'SALIR' \n   1- Placa de video NVIDIA \n   2- Placa de video AMD \n   3- Procesador INTEL \n   4- Procesador AMD \n   5- Placa madre").toUpperCase();

    if (productsChosen === null) {
        break;
    }

    if (productsChosen.length == 0) {
        alert("Por favor, no deje vacío este espacio e ingrese la información solicitada. Intente nuevamente");
        break;
    }

    if (productsChosen == "SALIR") {
        alert("Lamentamos que no haya finalizado su compra, lo esperamos pronto")
        break;
    }

    addToCart(parseInt(productsChosen));
    keepBuying = keepBuying = confirm("¿Quiere seguir comprando?");
    
} while (keepBuying);

const totalAmount = shoppingCart.reduce ( (acumulator, shoppingCartProducts) => acumulator + shoppingCartProducts.amount, 0);
const totalPrice = shoppingCart.reduce ( (acumulator, shoppingCartProducts) => acumulator + shoppingCartProducts.price * shoppingCartProducts.amount, 0);

shoppingCart.forEach(shoppingCartProducts => {
    console.log(shoppingCartProducts.name);
});


if (productsChosen != "SALIR" && productsChosen.length > 0) {
    
    payments = Number(prompt("¿En cuantas cuotas le gustaría abonar? \n    -1 \n    -2 \n    -3 \n    -6 \n    -12"));

    switch (payments) {
        case 1:
            totalWithFees = totalPrice + percentageCalculator(totalPrice, 0);
            break;
        case 2:
            totalWithFees = totalPrice + percentageCalculator(totalPrice, 10);
            break;
        case 3:
            totalWithFees = totalPrice + percentageCalculator(totalPrice, 20);
            break;
        case 6:
            totalWithFees = totalPrice + percentageCalculator(totalPrice, 50);
            break;
        case 12:
            totalWithFees = totalPrice + percentageCalculator(totalPrice, 90);
            break;
        default:
            alert("Por favor seleccione una de las opciones disponibles")
            payments = 0;
            break;
    }
    
}

function percentageCalculator (amount, percentageAmount) {
    flatAmount = (amount / 100) * percentageAmount;
    percentage = percentageAmount;
    return flatAmount;
}


function ivaCalculator (amount) {
    iva = amount * .25;
    return iva;
}


totalWithIVA = addition(totalWithFees, ivaCalculator(totalWithFees));


if (payments == 1) {
    alert("Gracias por elegirnos. Compró " + totalAmount +" producto/s. El valor de su compra es de " + totalPrice + ". Su precio final es de $" + totalWithIVA + ",  incluyendo el IVA ($" + iva + ")");

} else if (payments > 1)  {
    alert("Gracias por elegirnos. El valor de su compra es de " + totalPrice + ". Al haber seleccionado pagar en " + payments + " cuotas, obtuvo un recargo del " + percentage + "% ($" + flatAmount + "). Su precio final es de $" + totalWithIVA + ",  incluyendo el IVA ($" + iva + ")");
}

 