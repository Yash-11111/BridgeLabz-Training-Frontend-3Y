// Q6 - E-Commerce Inventory System
// Functions: getLowStockProducts, sortProductsByPrice, calculateTotalInventoryValue, groupByCategory

const PRODUCTS = [
  { id:1, name:'Laptop', category:'Electronics', price:60000, stock:5 },
  { id:2, name:'Mouse', category:'Electronics', price:800, stock:30 },
  { id:3, name:'Shirt', category:'Apparel', price:700, stock:3 },
  { id:4, name:'Coffee Mug', category:'Home', price:250, stock:20 },
  { id:5, name:'Jacket', category:'Apparel', price:3500, stock:2 }
];

function getLowStockProducts(products, threshold = 5) {
  return products.filter(p => p.stock <= threshold);
}

function sortProductsByPrice(products, asc = true) {
  return [...products].sort((a,b) => asc ? a.price - b.price : b.price - a.price);
}

function calculateTotalInventoryValue(products) {
  return products.reduce((acc, p) => acc + p.price * p.stock, 0);
}

function groupByCategory(products) {
  return products.reduce((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});
}

// Demo
console.log('Low stock products:', getLowStockProducts(PRODUCTS));
console.log('Sorted by price (asc):', sortProductsByPrice(PRODUCTS));
console.log('Total inventory value:', calculateTotalInventoryValue(PRODUCTS));
console.log('Grouped by category:', groupByCategory(PRODUCTS));

module.exports = { PRODUCTS, getLowStockProducts, sortProductsByPrice, calculateTotalInventoryValue, groupByCategory };