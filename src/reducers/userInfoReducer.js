import { userInfo } from '../actionTypes/loginActionType';

export default (state = {}, action) => {
    switch (action.type) {
        case userInfo:
          return action.payload;
        default:
          return state;
      }
};
