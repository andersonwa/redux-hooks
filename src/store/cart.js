const INITIAL_STATE = {
  items: [],
  shippingValue: 0
}

const cart = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT':
      return { 
        ...state, 
        items: [ ...state.items, { price: Math.floor(Math.random() * 100) + 1 } ]
      }
    case 'SET_SHIPPING':
      return { ...state, shippingValue: Math.floor(Math.random() * 100) + 1 }
    default:
      return state;
  }
}

export default cart;