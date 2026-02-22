
const initialState = {
  total: 0,
  item: 0,
  showCart: false,
  cart: []
};

const cartReducer = (state = initialState, action) => {

  switch (action.type) {

     case "ADD_ITEM":
        const product = action.payload;
        const existedItem = state.cart.find((item)=>item.id === product.id);
        if(!existedItem){
            return{
                ...state,
                cart:[...state.cart,{...product,qty :1}],
                total:state.total + product.price,
                item:state.item + 1
            };
        }else{
            return{
                ...state,
                cart:state.cart.map((i)=>i.id ===product.id ? { ...i, qty: i.qty + 1 } : i),
                total:state.total + product.price,
                item:state.item + 1
            }
        }
    case "REMOVE_ITEM":
        const id = action.payload;
        const removeProduct = state.cart.find((i) => i.id === id);

        return {
            ...state,
            cart: state.cart.map((i) => i.id === id ? { ...i, qty: i.qty - 1 }: i).filter((i) => i.qty > 0),
            total:state.total - removeProduct.price,
            item: state.item - 1
        }
    case "CLEAR_CART":

      return {
        total: 0,
        item: 0,
        showCart: false,
        cart: []
      };
    case "TOGGLE_CART":

      return {
        ...state,
        showCart: !state.showCart
      };
    default:
      return state;
  }
};

export default cartReducer;