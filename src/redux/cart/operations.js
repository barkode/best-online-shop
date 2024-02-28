export const getAllCartProducts = state => state.cart;

export const addProductToCart = () => {};

export const clearCart = state => (state.cart = []);

export const deleteProductFromCart = () => {};

export const countQuantityOnCart = state => state.cart.length;

export const countQuantityOfProduct = state => state.cart.quantity;

export const getCartProduct = () => {};


//  Object with needed methods.
// const cart = {
//   items: [],

//   getItems() {
//     return this.items;
//   },

//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }
//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };
//     this.items.push(newProduct);
//   },

//   remove(productName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = items[i];

//       if (productName === name) {
//         items.splice(i, 1);
//       }
//     }
//   },

//   clear() {
//     this.items = [];
//   },

//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;
//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }
//     return total;
//   },
// };
