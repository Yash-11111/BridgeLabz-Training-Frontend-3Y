// Q1 - E-Commerce Product Manager

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    const discount = (this.price * percent) / 100;
    this.price -= discount;
  }

  details() {
    return `ID: ${this.id} | ${this.name} | ₹${this.price} | Category: ${this.category}`;
  }
}

const products = [
  new Product(1, "Laptop", 50000, "Electronics"),
  new Product(2, "Shoes", 1200, "Fashion"),
  new Product(3, "Mouse", 500, "Electronics"),
];

const expensive = products.filter(p => p.price > 1000);
console.log("Products > 1000:");
expensive.forEach(p => console.log(p.details()));
