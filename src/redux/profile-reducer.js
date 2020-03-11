const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hello,World', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'React', likesCount: 11},
        {id: 4, message: 'Redux', likesCount: 11}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            debugger;
            let newPost = {
                id: 5,
                message: action.message,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        default:
            return state;
    }
};


export const addPostActionCreator = (message) => ({type: ADD_POST, message});

export default profileReducer;