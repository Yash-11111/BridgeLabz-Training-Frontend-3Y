// Q2 - Online Food Ordering (map + Error Handling)
// calculateBill(orderItems): maps items to prices, reduces to total, throws on invalid items

const MENU = {
  burger: 120,
  fries: 60,
  soda: 30,
  pizza: 300
};

function calculateBill(orderItems = []) {
  // Map items to prices, throw if any item invalid
  const priceList = orderItems.map(item => {
    if (!MENU.hasOwnProperty(item)) {
      throw new Error(`Invalid menu item ordered: ${item}`);
    }
    return MENU[item];
  });

  // Reduce to total
  const total = priceList.reduce((acc, p) => acc + p, 0);
  return total;
}

// Demo with try/catch
function demoOrder(order) {
  try {
    const total = calculateBill(order);
    console.log('Order:', order, 'Total:', total);
  } catch (err) {
    console.error('Failed to calculate bill:', err.message);
  }
}

demoOrder(['burger', 'fries']);       // valid
demoOrder(['pizza', 'icecream']);     // invalid (icecream not in MENU)

module.exports = { MENU, calculateBill };