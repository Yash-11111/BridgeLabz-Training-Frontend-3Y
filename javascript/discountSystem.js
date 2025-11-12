
let totalPurchase = 7200; 
let discountPercent = 0;
let finalPrice = 0;

if (totalPurchase >= 10000) {
  discountPercent = 25;
} else if (totalPurchase >= 5000) {
  discountPercent = 15;
} else if (totalPurchase >= 2000) {
  discountPercent = 5;
} else {
  discountPercent = 0;
}


let discountAmount = (totalPurchase * discountPercent) / 100;
finalPrice = totalPurchase - discountAmount;


finalPrice = Math.round(finalPrice);


console.log("------ Progressive Discount Report ------");
console.log(`Original Total: ₹${totalPurchase}`);
console.log(`Discount Applied: ${discountPercent}%`);
console.log(`Final Price After Discount: ₹${finalPrice}`);
