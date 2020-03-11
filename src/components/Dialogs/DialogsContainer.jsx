import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AuthRedirectCheck} from "../../hoc/AuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};


export default compose(connect(mapStateToProps, {
    sendMessageCreator,
    updateNewMessageBodyCreator
}), AuthRedirectCheck)(Dialogs);
