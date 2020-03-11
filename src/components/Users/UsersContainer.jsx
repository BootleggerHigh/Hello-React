import React from 'react';
import {connect} from "react-redux";
import {ChooseThunkFollowCreator, ChooseThunkUnfollowCreator, getUsersThunkCreator} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {currentPage, followingInProgress, getUsers, isAuth, isFetching, pageSize} from "../../redux/userselectors";


class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.getUsersThunkCreator();
    }


    setPageRequest = (page) => {
        this.props.getUsersThunkCreator(page);
    };


    render() {
        console.log(this.props);

        return (
            <>
                {this.props.isFetching ? <Preloader/> : ''}
                <Users pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       setPageRequest={this.setPageRequest}
                       users={this.props.users}
                       inProgress={this.props.inProgress}
                       followingInProgress={this.props.followingInProgress}
                       follow={this.props.ChooseThunkFollowCreator}
                       unfollow={this.props.ChooseThunkUnfollowCreator}
                       isAuth = {this.props.isAuth}

                />
            </>
        )
    };
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: pageSize(state),
        currentPage: currentPage(state),
        isFetching: isFetching(state),
        followingInProgress: followingInProgress(state),
        isAuth : isAuth(state),
    }
};
export default compose(
    connect(mapStateToProps, {
        getUsersThunkCreator, ChooseThunkFollowCreator, ChooseThunkUnfollowCreator
    }),
)(UsersContainer);