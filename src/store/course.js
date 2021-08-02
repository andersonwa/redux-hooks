const INITIAL_STATE = {
  data: [
    'React Native',
    'ReactJS'
  ]
};

const courses = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_COURSE':
      return { ...state, data: [ ...state.data, action.title ] };
    default:
      return state;
  }
}

export default courses;
