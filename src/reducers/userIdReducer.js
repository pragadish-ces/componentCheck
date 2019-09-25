import { userId } from '../actionTypes/loginActionType';

export default (state = {}, action) => {
    switch (action.type) {
        case userId:
          return action.payload;
        default:
          return state;
      }
};
