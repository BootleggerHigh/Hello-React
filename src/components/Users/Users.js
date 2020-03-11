import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

/*

Подписка на пользователей осуществляется только после успешной авторизации.

pages - Выводится количество страниц с пользователями,
в каждой странице по 5 пользователей
(pageSize * 5) - Выводится общее количество пользователей
событие OnClick по странице показывает страницу,и пользователей на этой странице.
users.map выводит пользователей на этой странице.
*/
const Users = (props) => {
    let pages = [];
    for (let i = 1; i <= props.pageSize; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                USERS
            </div>
            <div className={styles.totalUsers}>
                Количество регистраций : {props.pageSize * 5}
            </div>
            <div>
                {pages.map(page => {
                    return <button onClick={() => props.setPageRequest(page)}><span
                        className={props.currentPage === page && styles.selectedPage}>{page}</span></button>
                })}

            </div>
            {
                props.users.map(u => <>
                <span>
                    <div>
                        <NavLink to={`profile/${u.id}`}>
                            <img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}
                                 alt="Аватарочка"/>
                    </NavLink>
                        </div>
                    <div>
                        {props.isAuth ?
                            u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.unfollow(u.id);
                                }}>Unfollow</button> :
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button> : false
                        }
                            </div>
                            </span>
                    <span>
                            <span>
                            <div> Имя {u.name}</div>
                            <div>{u.status}</div>
                            </span>
                            <span>
                            </span>
                            </span>
                </>)
            }
            <button className={styles.buttonTurbo}
                    onClick={() => props.setPageRequest(props.pageSize !== props.currentPage ? props.currentPage + 1 : props.currentPage)}>
                {props.pageSize !== props.currentPage ? "Ещё пятерочку пользователей" : "Пользователи закончились"}
            </button>
        </div>)
};
export default Users
