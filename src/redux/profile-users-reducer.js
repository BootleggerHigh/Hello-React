import {getProfile, getStatus, UpdateStatus} from "../api/api";

const CHOOSE_PROFILE = "CHOOSE-PROFILE";
const SET_STATUS = "SET-STATUS";
let initialState = {
    profile: [],
    status: "",
};


const profileUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSE_PROFILE:
            return {...state, profile: [action.profile]};
        case SET_STATUS:
            return {...state, status: action.setStatus};
        default:
            return {
                ...state
            }
    }
};


export const choicesProfileCreator = (profile) => ({type: CHOOSE_PROFILE, profile});

export const SetStatusCreator = (setStatus) => ({type: SET_STATUS, setStatus});


export const GetProfileThunkCreator = (id = 6286) => {
    return async (dispatch) => {
        const response = await getProfile(id);
        dispatch(choicesProfileCreator(response));
    }
};

export const getStatusUsers = (id = 6286) => {
    return async (dispatch) => {
        const response = await getStatus(id);
        dispatch(SetStatusCreator(response));
    }
};

export const UpdateMyStatus = (status) => {
    return async (dispatch) => {
        const response = await UpdateStatus(status);
        if (response.resultCode === 0) {
            dispatch(SetStatusCreator(status));
        }
    };
};

export default profileUsersReducer;