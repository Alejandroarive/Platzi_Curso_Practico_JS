
function discountprice_calculation(precio, descuento){
    const porcentaje_pdescuento = 100 - descuento;
    const precio_cdescuento = (precio * porcentaje_pdescuento)/100;
    return precio_cdescuento;
}

function onclickbuttom_pricediscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;
    const precio_descuento = discountprice_calculation(priceValue, discountValue);
    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio con descuento es de: $" + precio_descuento;
}
// console.log({
//     precio_original,
//     descuento,
//     porcentaje_pdescuento,
//     precio_cdescuento,
// });
