import { Url, Api } from '../common';
import { loginSucess,
         loginFailure, 
         userInfo, 
         userId } from '../actionTypes/loginActionType';

export const LoginAction = (data) => dispatch => {
    Api.post(Url.loginUrl, data).then(response => {
        dispatch({
            type: loginSucess,
            payload: response
        });
        dispatch({
            type: userInfo,
            payload: response.userInfo
        });
        dispatch({
            type: userId,
            payload: response.userInfo.userID
        });
        Api.token = response.userInfo.securityToken;
    }).catch((err) => {
        dispatch({
            type: loginFailure,
            payload: err
        });
    });
};
