import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {LoginThunkCreator} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {required} from "../../utils/validarots/validators";
import {Input} from "../common/FormsControl/FormsControls";
import style from '../common/FormsControl/FormsControls.module.css'
/* Авторизация пользователя, по запросу на API
LoginForm - обертка redux формы,с валидацией на корректные введенные значения,
аутентификации.
Ответ об авторизации передается в thunk - LoginThunkCreator
*/
const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            {props.error &&
            <div className={style.formSummaryError}>
                {props.error}
            </div>}

            <div>
                <Field placeholder={"Login"} validate={[required]} name={"email"} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} validate={[required]} name={"password"} component={Input}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

let Login = (props) => {

    const onSubmit = (value) => {
        props.LoginThunkCreator(value.email, value.password, value.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={`/profile/${props.id}`}/>
    }

    return (<div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>)
};

const mapToStateProps = (store) => ({isAuth: store.auth.isAuth, id: store.auth.id});


export default connect(mapToStateProps, {LoginThunkCreator})(Login);