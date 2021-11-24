// task one to reverse value of array witout using reverse method

const billVal = [220, 95, 17, 50, 100, 20];

function applyGst(price) {

    const total = [];
    for (let i = 0; i < price.length; i++) {
        const bill = {
            price: "",
            gst: "",

            total: ""
        };
        if (price[i] <= 100) {
            bill.price = price[i];
            bill.gst = "15%";
            bill.total = price[i] + (15 * price[i]) / 100;
            total.push(bill);
        } else {
            bill.price = price[i];
            bill.gst = "20%";
            bill.total = price[i] + (20 * price[i]) / 100;
            total.push(bill);
        }
    }
    console.log("total", total);
    return total;
}
applyGst(billVal);

//****tip calculator */



// const billVal = [220, 95, 17, 50, 100, 20];
// const tip = [];
// const total = [];
// const calTip = (billVal) => {
//     for (let i = 0; i < billVal.length; i++) {
//         if (billVal[i] >= 100) {
//             tip.push(billVal[i] * 0.15);
//             total.push(billVal[i] + (billVal[i] * 0.15))
//         } else {
//             tip.push(billVal[i] * 0.20);
//             total.push(billVal[i] + (billVal[i] * 0.2))
//         }
//     }
// }
// calTip(billVal);
// console.log('bill val', billVal)
// console.log('calc tip', tip);
// console.log('final bill', total);



//********** */ Age calculator*************

function ageCalculator(name, yearOfBirth, currentYear) {
    var age = currentYear - yearOfBirth;
    return (`${name} is ${age} year old`);
}
console.log(ageCalculator("swati", 2000, 2021));



//  *****BMI calculator******


function bmiCalculator(name, weight, height) {
    var bmi = weight / height * height;
    return (name + " bmi is " + bmi)
}
console.log(bmiCalculator("swati", 40, 2));















