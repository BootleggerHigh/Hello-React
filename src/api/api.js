import * as axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "f2aaca78-a619-412e-bb68-8eedbca1c99e"
    }
});

export const getUsers = (page = 1) => {
    return instanse.get(`users?page=${page}&count=5`).then(response => response.data);
};

export const followUsers = (id = 1) => {
    return instanse.post(`follow/${id}`).then(response => response.data);
};
export const GetMyLogin = () => {
    return instanse.get('auth/me').then(response => response.data);
};
export const unfollowUsers = (id = 1) => {
    return instanse.delete(`follow/${id}`).then(response => response.data);
};

export const getProfile = (userID = 6286) => {
    return instanse.get(`profile/${userID}`).then(response => response.data);
};

export const getStatus = (userID = 6286) => {
    return instanse.get(`profile/status/${userID}`).then(response => response.data);
};
export const UpdateStatus = (status) => {
    return instanse.put(`profile/status/`, {status: status}).then(response => response.data);
};

export const LoginUsers = (email, password, rememberMe = false) => {
    return instanse.post('auth/login', {email, password, rememberMe})
};
export const LogoutUsers = () => {
    return instanse.delete('auth/login');
};