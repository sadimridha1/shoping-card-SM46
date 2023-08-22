// let total = 0;
let count = 1;
const finalTotalPrice = document.getElementById('final-total');
let finalParseflot = parseFloat(finalTotalPrice.innerText);
const totalPrice = document.getElementById('tatal-price');
let totalPriceParsefolt = parseFloat(totalPrice.innerText);

function handleClick(getCard){
    console.log('clcik')
    const itemName = getCard.childNodes[3].childNodes[7].innerText;
    const li = document.createElement('li');
    // li.innerText = itemName;
    const listContainar =  document.getElementById('list-containar');
    li.classList.add('list-none')
    li.innerHTML = `${count} ${itemName}`
    count++;
    listContainar.appendChild(li);
    const selectItemContainar = document.getElementById('select-item');
    selectItemContainar.appendChild(li);

    const getPrice = getCard.childNodes[3].childNodes[9].innerText.split(' ')[0];
    totalPriceParsefolt = totalPriceParsefolt + parseFloat(getPrice);
    const toltalP = totalPriceParsefolt.toFixed(2);
    // set  total price area 
    // .innerText = toltalP

   
    totalPrice.innerText = toltalP;
    finalTotalPrice.innerText = toltalP;
    

    const PurchaseBtn = document.getElementById('Purchase-btn');
    if(toltalP > 0){
        PurchaseBtn.removeAttribute('disabled');
    } else{
        PurchaseBtn.setAttribute('disabled', true);
    }   
    
    const discountArea = document.getElementById('discount-area');
    document.getElementById('go-home').addEventListener('click', function(){
        totalPrice.innerText = '0.00';
        discountArea.innerText = '0.00';
        finalTotalPrice.innerText = '0.00';
        li.innerHTML = '';
        PurchaseBtn.setAttribute('disabled', true);
        totalPriceParsefolt = 0;
        finalParseflot = 0;
        count = 1;
    })

    // apply btn disabled elable
    const applyBtn = document.getElementById('apply-cupon')
    if(toltalP >= 200){
        applyBtn.removeAttribute('disabled');
    }else{
        applyBtn.setAttribute('disabled', true);
    }
    
   
    document.getElementById('apply-cupon').addEventListener('click', function(){
        
    const cuponInput = document.getElementById('cupon-input');

    if (cuponInput.value === 'SELL200' && toltalP >= 200) {
        const discount = toltalP * (20 / 100);
        const finalDiscount = discount.toFixed(2);
        
        discountArea.innerText = finalDiscount;

        const finalPrice = toltalP - finalDiscount;
        const lastFinalPrice = finalPrice.toFixed(2);
        finalTotalPrice.innerText = lastFinalPrice;
        cuponInput.value = '';
        applyBtn.setAttribute('disabled', true);
    }

        document.getElementById('go-home').addEventListener('click', function(){
            totalPrice.innerText = '0.00';
            discountArea.innerText = '0.00';
            finalTotalPrice.innerText = '0.00';
            li.innerHTML = '';
            totalPriceParsefolt = 0;
            finalParseflot = 0;
            count = 1;
        })
    })
    
}

// document.getElementById('apply-cupon').addEventListener('click', function () {
            
//     const applyCuponBtn = document.getElementById('apply-cupon');
//     const findCuponInput = event.target.value;

//     if (applyCuponBtn.value === 'SELL200' && toltalP >= 200) {
//         const discount = toltalP * (20 / 100);
//         const finalDiscount = discount.toFixed(2);
//         const discountArea = document.getElementById('discount-area');
//         const lastDiscount = discountArea.innerText = finalDiscount;

//         const finalPrice = toltalP - finalDiscount;
//         const lastFinalPrice = finalPrice.toFixed(2);
//         const grandPrice = finalTotalPrice.innerText = lastFinalPrice;

       
//     }
// })





