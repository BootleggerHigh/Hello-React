import React, {Component} from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {GetProfileThunkCreator, getStatusUsers, UpdateMyStatus} from "../../redux/profile-users-reducer";
import {compose} from "redux";
import {AuthRedirectCheck} from "../../hoc/AuthRedirect";

/*
DidMount вызывает 2-е thunk(запрос о пользователе,о его статусе);
Передача в компонент Profile для вывода о пользователе и его статусе;
*/

class ProfileContainer extends Component {

    componentDidMount() {
        this.props.GetProfileThunkCreator(this.props.match.params.userID);
        this.props.getStatusUsers(this.props.match.params.userID);
    }


    render() {
        return (
            <Profile {...this.props} status={this.props.status} UpdateMyStatus={this.props.UpdateMyStatus}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.profileUsersPage,
        status: state.profileUsersPage.status
    }

};
export default compose(
    connect(mapStateToProps, {GetProfileThunkCreator, getStatusUsers, UpdateMyStatus}),
    withRouter,
    AuthRedirectCheck
)(ProfileContainer);