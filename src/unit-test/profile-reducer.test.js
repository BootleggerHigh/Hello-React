import React from 'react';
import profileReducer, {addPostActionCreator} from "../redux/profile-reducer";

const state = {
    posts: [
        {id: 1, message: 'Hello,World', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'React', likesCount: 11},
        {id: 4, message: 'Redux', likesCount: 11}
    ],
    newPostText: ''
};


it('new post should be added', () => {
    let action = addPostActionCreator("Hello");
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5);
});


it('message should be added ', () => {
    let action = addPostActionCreator("Test");
    let newState = profileReducer(state, action);
    expect(newState.posts[4].message).toBe("Test");
});


it('should be likesCount - zero  ', () => {
    let action = addPostActionCreator("Test");
    let newState = profileReducer(state, action);
    expect(newState.posts[4].likesCount).toBe(0);
});

