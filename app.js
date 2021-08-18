function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number')
    let productNumber = productInput.value;

    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    //update product total
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;


    calculateTotal()
}


function getInputValue(product) {
    const productInput = document.getElementById(product + '-number')
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10
    const totalPrice = subTotal + tax;

    //show to the web page
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}

//phone increase decrease event handler

document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {

    updateProductNumber('phone', 1219, false)

})


//Phone__Case  increase decrease event handler
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true)
})
document.getElementById('case-minus').addEventListener('click', function () {

    updateProductNumber('case', 59, false)

})