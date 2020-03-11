import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login";
import {LoginMe} from "./redux/auth-reducer";
import {connect} from "react-redux";
import {compose} from "redux";

class App extends React.Component {

    componentDidMount() {
        if (window.confirm('Ваша авторизация сохранилась,возобновить сессию?')) this.props.LoginMe()
    }

    render() {

        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>

                    <Route path='/profile/:userID?'
                           render={() => <ProfileContainer/>}/>

                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/login'
                           render={() => <Login/>}/>

                </div>
            </div>
        )
    }
}

export default compose(
    withRouter,
    connect(null, {LoginMe}))
(App);