import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

//Функция высшего порядка,проверяющая  auth на true||false
//В случае false - перемещает на страницу авторизации

const mapStateToPropsForRedirect = (state) => {
    return {
        auth: state.auth.isAuth
    };
};

export const AuthRedirectCheck = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.auth) return <Redirect to='/login'/>;
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);

};