import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusHooks from "./ProfileStatusHooks";
import {UserProfile} from "./UserInfo";

/* Проверка пропсов на не пустоту,в случаи пустоты - загрузить Preloader;
   Перекидывания пропсов в компоненты UserProfile,ProfileStatusHooks;
*/
const ProfileInfo = (props) => {
    if (props.user.length === 0) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'
                    alt="Аватарка"/>
            </div>
            <div className={s.descriptionBlock}>
                <UserProfile user={props.user}/>
                <ProfileStatusHooks status={props.status}
                                    UpdateMyStatus={props.UpdateMyStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;