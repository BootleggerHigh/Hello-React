import {followUsers, getUsers, unfollowUsers} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const ALL_PAGES = 'ALL-PAGES';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_PRELOADER_PAGE = 'SET-PRELOADER-PAGE';
const SET_IS_FOLLOWING_PROGRESS = "SET-IS-FOLLOWING-PROGRESS";


let initialState = {
    users: [],
    pageSize: 1,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            };
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case ALL_PAGES : {
            return {...state, pageSize: action.pages}
        }
        case SET_CURRENT_PAGE : {
            return {...state, currentPage: action.pages_current}
        }
        case SET_PRELOADER_PAGE : {
            return {...state, isFetching: action.preloader}
        }
        case SET_IS_FOLLOWING_PROGRESS : {
            return {
                ...state, followingInProgress: action.progress
                    ? [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(inProgress(true,userId));
    let response = await apiMethod(userId);

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(inProgress(false,userId));
};

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});


export const setUsers = (users) => ({type: SET_USERS, users});
export const AllPages = (pages) => ({type: ALL_PAGES, pages});

export const getPageCurrent = (pages_current) => ({type: SET_CURRENT_PAGE, pages_current});

export const isLoading = (preloader) => ({type: SET_PRELOADER_PAGE, preloader});

export const inProgress = (progress, userId) => ({type: SET_IS_FOLLOWING_PROGRESS, progress, userId});

export const getUsersThunkCreator = (page) => {
    return async (dispatch) => {
        dispatch(isLoading(true));
        const response = await getUsers(page);
        dispatch(getPageCurrent(page));
        dispatch(isLoading(false));
        dispatch(setUsers(response.items));
        dispatch(AllPages(Math.ceil(response.totalCount / 5)));
    }
};

export const ChooseThunkFollowCreator = (id) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, id, followUsers.bind(followUsers), followSuccess);
    }
};
export const ChooseThunkUnfollowCreator = (id) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, id, unfollowUsers.bind(unfollowUsers), unfollowSuccess);
    }
};


export default usersReducer;