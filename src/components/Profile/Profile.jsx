import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
//Промежуточный компонент,перекидывает в ProfileInfo пропсы
const Profile = (props) => {
    return (
        <div>

            <ProfileInfo user={props.user.profile}
                         status={props.status}
                         UpdateMyStatus={props.UpdateMyStatus}/>

            <MyPostsContainer/>
        </div>
    )
};

export default Profile;