import actionTypes from '../actionTypes';
import { updateObject } from '../utility';

const initialState = {
  is_logged_in: localStorage.getItem('is_logged_in') === 'true',
  data: JSON.parse(localStorage.getItem('data') ?? '[]'),
};

const storeChangeLogged = (state, { is_logged_in }) => updateObject(state, {
  is_logged_in,
});

const storeFormAdd = (state, { data }) => updateObject(state, {
  data,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.CHANGE_LOGGED: return storeChangeLogged(state, action);
  case actionTypes.ADD_FORM: return storeFormAdd(state, action);
  default: return state;
  }
};

export default reducer;
