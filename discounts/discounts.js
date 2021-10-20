


const calculePriceWithDiscount = (price, discount) => price - (price*(discount / 100))


calculePriceWithDiscount(100, 20)

function priceDiscountFinal(){
    const originalPrice = document.getElementById("inputPrice")
    const valuePrice = parseInt(originalPrice.value)
    const discount = document.getElementById("inputCoupons")
    const valueDiscount = parseInt(discount.value)
    const priceWithDiscount = calculePriceWithDiscount(valuePrice, valueDiscount);

    
    const displayPrice = document.getElementById("priceP");
    const price = valuePrice;
    displayPrice.innerText = `The original price is $${price}`

    const displayPercentageDiscount = document.getElementById("discountP")
    displayPercentageDiscount.innerText = `The discount is -${valueDiscount}%`

    console.log(priceWithDiscount)
    
    
    const displayPriceWithDiscount = document.getElementById('resultP')
    displayPriceWithDiscount.innerText = `Your final price is $${priceWithDiscount}`
      

}
