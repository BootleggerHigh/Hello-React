import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

//Передача пропсов и dispatch в MyPost
const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
};
export default connect(mapStateToProps, {addPostActionCreator})(MyPosts);