import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {LogOut} from "../../redux/auth-reducer";

export class HeaderContainer extends Component {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {LogOut})(HeaderContainer);