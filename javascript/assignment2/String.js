
let product = " wireless headphones PRO ";

let cleaned = product.trim().toLowerCase();
let title = cleaned
  .split(" ")
  .map(w => w.charAt(0).toUpperCase() + w.slice(1))
  .join(" ")
  .replace(/\bPro\b/i, "Pro Edition");

console.log("Final Title:", title);
console.log("Length:", title.length);
