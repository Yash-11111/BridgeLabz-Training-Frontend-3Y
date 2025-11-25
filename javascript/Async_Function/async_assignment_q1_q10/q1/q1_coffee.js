// Q1 – Async Coffee Maker

function boilWater() {
  return new Promise((res, rej) => {
    setTimeout(() => Math.random()<0.9?res("Water boiled"):rej("Boiler error"), 1000);
  });
}
function brewCoffee() {
  return new Promise((res, rej) => {
    setTimeout(() => Math.random()<0.9?res("Coffee brewed"):rej("Brew error"), 1200);
  });
}
function pourCoffee() {
  return new Promise((res, rej) => {
    setTimeout(() => Math.random()<0.9?res("Poured into cup"):rej("Cup spill"), 1500);
  });
}

boilWater()
  .then(msg => { console.log(msg); return brewCoffee(); })
  .then(msg => { console.log(msg); return pourCoffee(); })
  .then(msg => { console.log(msg); console.log("Coffee ready for the team!"); })
  .catch(err => console.log("Process failed:", err));
