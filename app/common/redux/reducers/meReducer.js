import { actionTypes } from 'actions';

const initialState = {
  me: {},
};

const setMe = (state, action) => {
  let me = action.me
  return {me}
}
const removeMe = (state) => {
  return {me: {}}
}

const meReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ME: return setMe(state, action);
    case actionTypes.REMOVE_ME: return removeMe(state);
    default: return state;
  }
};

module.exports = {meReducer}
