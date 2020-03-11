//Примитивные селекторы для компонента UserContainer

export const getUsers = (state) => {
    return state.usersPage.users;
};

export const pageSize = (state) => {
    return state.usersPage.pageSize
};
export const currentPage = (state) => {
    return state.usersPage.currentPage;
};
export const isFetching = (state) => {
    return state.usersPage.isFetching;
};
export const followingInProgress = (state) => {
    return state.usersPage.followingInProgress;
};
export const isAuth = (state) => {
    return state.auth.isAuth;
};