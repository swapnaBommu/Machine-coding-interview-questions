// redux/cartActions.js

export const addItem = (product) => {
  return {
    type: "ADD_ITEM",
    payload: product
  };
};

export const removeItem = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: id
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART"
  };
};

export const toggleCart = () => {
  return {
    type: "TOGGLE_CART"
  };
};