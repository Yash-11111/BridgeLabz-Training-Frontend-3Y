// Q9 - Shopping Cart with Coupon RegExp

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, qty) {
    this.items.push({ name, price, qty });
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  applyCoupon(code) {
    const couponRe = /^(SAVE|DISC)(\d{2})$/; // e.g., SAVE20, DISC10

    const match = code.match(couponRe);
    if (!match) return { success: false, msg: "Invalid coupon format" };

    const percent = Number(match[2]);
    const total = this.getTotal();
    const discount = (total * percent) / 100;
    const final = total - discount;

    return { success: true, total, final, percent };
  }
}

// Example usage
const cart = new Cart();
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);

console.log("Total:", cart.getTotal());

const result = cart.applyCoupon("SAVE20");
console.log(result);
