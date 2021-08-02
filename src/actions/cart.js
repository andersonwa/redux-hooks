export function actionAddItemTocart() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: 'ADD_PRODUCT',
      });
    }, 1000);
  };
}

export function actionCalculateShipping() {
  return (dispatch) => {
    dispatch({ type: 'SET_SHIPPING' });
  };
}
