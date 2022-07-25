import * as actionTypes from "./actionTypes";

export const addToCart = (book) => {
  return {
    type: actionTypes.ADD_TO_CART,
    book: book,
    // quantity:quantity
  };
};

export const removeFromCart = (id) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    id: id,
  };
};

export const incrementQuantity = (id) => {
  return {
    type: actionTypes.INCREMENT_QUANTITY,
    id: id,
  };
};

export const decrementQuantity = (id) => {
  return {
    type: actionTypes.DECREMENT_QUANTITY,
    id: id,
  };
};

export const confirmOrder = (prods) => {
  return {
    type: actionTypes.CONFIRM_ORDER,
    products: prods,
  };
};

export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART,
  };
};
