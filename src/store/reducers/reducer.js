import * as actionTypes from "../actions/actionTypes";

const initialState = {
  cart: [], //{book,quantity}
  orders: [], //{books,Totalprice,contactDetails:{name,email,address,mobile}}
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const id = action.book.id;
      const newCart = [...state.cart];
      let updatedProduct = {};
      if (state.cart.length > 0) {
        state.cart.forEach((prod, index) => {
          if (prod.book.id === id) {
            updatedProduct = { ...state.cart[index] };
            updatedProduct.quantity++;
            newCart[index] = updatedProduct;
          }
        });
        let exist = newCart.some((el) => el.book.id === id);
        if (!exist) {
          newCart.push({
            book: {
              ...action.book,
            },
            quantity: 1,
          });
        }
      } else {
        newCart.push({
          book: {
            ...action.book,
          },
          quantity: 1,
        });
      }
      alert("added to Cart successfully");
      return {
        ...state,
        cart: newCart,
      };
    case actionTypes.REMOVE_FROM_CART:
      const remID = action.id;
      const newCart1 = [...state.cart];
      const index = newCart1.findIndex((prod) => prod.book.id === remID);
      newCart1.splice(index, 1);
      return {
        ...state,
        cart: newCart1,
      };
    case actionTypes.CLEAR_CART:
      const emptyCart = [];
      return {
        ...state,
        cart: emptyCart,
      };
    case actionTypes.INCREMENT_QUANTITY:
      const incID = action.id;
      const newCart2 = [...state.cart];
      const incIndex = newCart2.findIndex((prod) => prod.book.id === incID);
      newCart2[incIndex].quantity++;
      return {
        ...state,
        cart: newCart2,
      };
    case actionTypes.DECREMENT_QUANTITY:
      const decID = action.id;
      const newCart3 = [...state.cart];
      const decIndex = newCart3.findIndex((prod) => prod.book.id === decID);
      if (newCart3[decIndex].quantity > 1) newCart3[decIndex].quantity--;
      return {
        ...state,
        cart: newCart3,
      };
    case actionTypes.CONFIRM_ORDER:
      const prods = action.products;
      console.log("reached here", prods);
      let newOrders = [...state.orders];
      newOrders.push({ ...prods });
      return {
        ...state,
        orders: newOrders,
      };
    default:
      return state;
  }
};

export default reducer;
