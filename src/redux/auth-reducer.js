import {GetMyLogin, LoginUsers, LogoutUsers} from "../api/api";
import {stopSubmit} from "redux-form";

const LOGIN_USER_DATA = "LOGIN-USER-DATA";


const initialStore = {
    email: null,
    password: null,
    rememberMe: null,
    isAuth: false,
    login: null,
    id: null
};

const authReducer = (state = initialStore, action) => {
    if (action.type === LOGIN_USER_DATA) {
        return {
            ...state,
            ...action.data,
        };
    } else {
        return state;
    }
};

export const loginUsers = (password, rememberMe, id, login, isAuth = true) => ({
    type: LOGIN_USER_DATA,
    data: {password, rememberMe, id, login, isAuth}
});
export const logoutUsers = (email, password, rememberMe, login, id, isAuth) => ({
    type: LOGIN_USER_DATA,
    data: {email, password, rememberMe, id, isAuth, login}
});
export const LoginMeAuth = (data) => ({
    type: LOGIN_USER_DATA,
    data: {...data, isAuth: true}
});


export const LoginThunkCreator = (email, password, rememberMe) => {
    return async (dispatch) => {
        const responseUsers = await LoginUsers(email, password, rememberMe);
        if (responseUsers.data.resultCode === 0) {
            const response = await GetMyLogin();
            if (response.resultCode === 0) {
                dispatch(loginUsers(password, rememberMe, responseUsers.data.data.userId, response.data.login));
            } else {
                dispatch(stopSubmit("login", {_error: "Неверно введена почта или пароль"}))
            }
        }
    }
};


export const LoginMe = () => {
    return async (dispatch) => {
        const response = await GetMyLogin();
        if (response.resultCode === 0) {
            dispatch(LoginMeAuth(response.data))
        }
    }
};


export const LogOut = () => {
    return async (dispatch) => {
        const response = await LogoutUsers();
        if (response.data.resultCode === 0) {
            dispatch(logoutUsers(null, null, null, false, null, null));
        }

    }
};
export default authReducer;