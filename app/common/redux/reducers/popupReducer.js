import { actionTypes } from 'actions';

const initialState = {
  popups: [],
};

const addPopup = (state, action) => {
  let list = state.popups;
  list.push(action.popup)
  list.forEach((item, i) => {
    item.key = i
  })
  return {popups: list}
}

const removePopup = (state) => {
  let list = state.popups;
  list.pop()
  return {popups: list}
}

const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POPUP: return addPopup(state, action);
    case actionTypes.REMOVE_POPUP: return removePopup(state);
    default: return state;
  }
};

module.exports = {popupReducer}
