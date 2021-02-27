import actionTypes from '../actionTypes';

export const storeChangeLogged = (is_logged_in) => {
  localStorage.setItem('is_logged_in', is_logged_in);
  return {
    type: actionTypes.CHANGE_LOGGED,
    is_logged_in,
  };
};

export const storeFormAdd = (user) => {
  const data = JSON.parse(localStorage.getItem('data') ?? '[]');
  const newData = [user, ...data];
  localStorage.setItem('data', JSON.stringify(newData));

  return {
    type: actionTypes.ADD_FORM,
    data: newData,
  };
};
