// Q3 - Product Discount System (Constructor + Prototype)
// Product constructor and prototype method applyDiscount(percent)

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
  if (typeof percent !== 'number' || percent < 0 || percent > 100) {
    throw new Error('Invalid discount percent');
  }
  const discountedPrice = +(this.price * (1 - percent / 100)).toFixed(2);
  return discountedPrice;
};

// Create products and apply discounts
const p1 = new Product('Shoes', 2000);
const p2 = new Product('Jacket', 5000);
const p3 = new Product('Watch', 1500);

console.log(p1.name, 'after 10% off =', p1.applyDiscount(10));
console.log(p2.name, 'after 20% off =', p2.applyDiscount(20));
console.log(p3.name, 'after 5% off =', p3.applyDiscount(5));

// Abstraction note:
// The applyDiscount method encapsulates the discount calculation so callers don't have to
// repeat formula or handle rounding, simplifying higher-level operations.

module.exports = { Product, p1, p2, p3 };