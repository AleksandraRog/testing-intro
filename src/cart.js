function notImplemented() {
  throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.");
}

function addToCart(cart, product, qty) {
  if (qty < 1) {
    throw new RangeError("Нулевое количество.");
  }

  let newCart = [...cart];
  if (!cart.find((v) => v.id === product.id)) {
    newCart.push({ ...product, quantity: 0 });
  }

  const targetCart = newCart.find((v) => v.id === product.id);
  targetCart.quantity += qty;
  if (targetCart.quantity > targetCart.stock) {
    throw new RangeError("Больше товара, чем есть на складе.");
  }

  return newCart;
}

function changeQuantity(cart, id, qty) {
  if (qty < 1) {
    throw new RangeError("Нулевое количество.");
  }

  if (!cart.find((v) => v.id === id)) {
    return cart;
  }

  let newCart = [...cart];
  const targetCart = newCart.find((v) => v.id === id);
  targetCart.quantity = qty;
  if (targetCart.quantity > targetCart.stock) {
    throw new RangeError("Больше товара, чем есть на складе.");
  }

  return newCart;
}

function removeFromCart(cart, id) {
  if (!cart.find((v) => v.id === id)) {
    return cart;
  }

  let newCart = [...cart];
  const targetCartIndex = newCart.findIndex((v) => v.id === id);
  newCart.splice(targetCartIndex, targetCartIndex + 1);
  return newCart;
}

function calculateCartSubtotal(cart) {
  let subtotal = 0;
  cart.forEach((v) => {
    subtotal += v.price * v.quantity;
  });
  return subtotal;
}

function calculateOrderTotal(cart, promo) {
  const sale = promo === "SAVE10" ? 0.1 : 0;
  const total = {
    subtotal: 0,
    discount: 0,
    delivery: 0,
    total: 0,
  };

  total.subtotal = calculateCartSubtotal(cart);
  if (total.subtotal > 20000) {
    total.discount = total.subtotal * sale;
  }

  if (total.subtotal < 50000) {
    total.delivery = 30000;
  }

  total.total = total.subtotal - total.discount + total.delivery;
  return total;
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== "undefined") module.exports = cartApi;
if (typeof window !== "undefined") window.cartApi = cartApi;
