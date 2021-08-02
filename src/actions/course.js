export function actionAddCourse() {
  return (dispatch) => {
    dispatch({ type: 'ADD_COURSE', title: 'GraphQL' });
  };
}
