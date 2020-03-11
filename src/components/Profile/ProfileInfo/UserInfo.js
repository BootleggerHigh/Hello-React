import defImg from "../../../assets/images/user.png";
import React from "react";
//Вывод конкретного юзера;
export const UserProfile = (props) => {
    return (props.user.map(user => (
        <div>
            <div>ID : {user.userId}</div>
            <div><img src={!user.photos.large ? defImg : user.photos.small} alt="Фотография профиля отсутствует"/></div>
            <div> Имя Фамилия : {user.fullName}</div>
            <div> Обо мне : {!user.aboutMe ? 'Отсутствует' : user.aboutMe}</div>
            <div> В поисках работы : {user.lookingForAJob ? 'Да' : 'Нет'}</div>
            <div> Вид работы
                : {!user.lookingForAJobDescription ? 'Информация отстуствует' : user.lookingForAJobDescription}</div>
            <div>----------------------------------------------</div>
            <div>Контакты :</div>
            <div>
                <div> Facebook : {!user.contacts.facebook ? 'Отсутствует' : user.contacts.facebook}</div>
                <div> website : {!user.contacts.website ? 'Отсутствует' : user.contacts.website}</div>
                <div> vk : {!user.contacts.vk ? 'Отсутствует' : user.contacts.vk}</div>
                <div> instagram : {!user.contacts.instagram ? 'Отсутствует' : user.contacts.instagram}</div>
                <div> youtube : {!user.contacts.youtube ? 'Отсутствует' : user.contacts.youtube}</div>
                <div> github : {!user.contacts.github ? 'Отсутствует' : user.contacts.github}</div>
                <div> mainLink : {!user.contacts.mainLink ? 'Отсутствует' : user.contacts.mainLink}</div>
            </div>

        </div>)));
};