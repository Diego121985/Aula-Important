/*const  myNamber = 20

function sum (number3 = myNamber, number= 2){

console.log(number3 + myNamber +number )
}
sum()*/

// Calcule Desconto ;
// Todos os produtos acima de R$ 30, 00 tem descontos 10%.

const cart = [10, 244, 99, 2, 20, 33, 250]

let finalValue = 0;
let totalWilthoutDiscount = 0;
let totalDicount = 0;

function calculateDiscount(price,discount){
    const result = price * discount / 100;
    return result
}


cart.forEach(value => {
    totalWilthoutDiscount += value;

    if(value > 30){
        const discount =  calculateDiscount(value,10)
        finalValue += (value - discount)
        totalDicount += discount;
    }else{
        finalValue += value

    }
    

});   
 console.log(` O valor final da compra foi de:R$${totalWilthoutDiscount.toFixed(2)} reais Porém você teve desconto de 10%, e irá pagar apenas R$${finalValue.toFixed(2)} E você economizou R$ ${totalDicount.toFixed(2)}. `)
