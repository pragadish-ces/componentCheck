import { loginFailure, loginSucess } from '../actionTypes/loginActionType';

export default (state = {}, action) => {
  switch (action.type) {
    case loginSucess:
      return action.payload;
    case loginFailure:
      return action.payload;
    default:
      return state;
  }
};
