import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validarots/validators";
import {TextArea} from "../../common/FormsControl/FormsControls";

/*

maxLength - максимальное количество символов в посте;
По событию onSubmit - публикуется пост;
SendMyPost обёртывает Redux форму, с валидацией на пустую строку и maxLength

*/
const maxLength = maxLengthCreator(25);

const MyPosts = React.memo(props => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);


    const UploadPost = (values) => {
        props.addPostActionCreator(values.postBody);
        values.postBody = '';
    };
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <SendReduxForm onSubmit={UploadPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

const SendMyPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={TextArea} validate={[required, maxLength]} name={'postBody'} placeholder={'Input post'}/>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const SendReduxForm = reduxForm({form: 'sendPost'})(SendMyPost);


export default MyPosts;