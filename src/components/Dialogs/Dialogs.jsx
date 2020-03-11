import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {Field, reduxForm} from "redux-form";
import {TextArea} from "../common/FormsControl/FormsControls";
import {maxLengthCreator, required} from "../../utils/validarots/validators";

/*
 maxLength - максимальное кол-во символов для сообщений;
 Передача пропсов в DialogItem,Message
 onSubmit - вызывает функцию addNewMessage, затем вызывается dispatch sendMessageCreator
 AddMessageForm - обёртывает redux form  с валидацией на пустую строку и с maxLength
*/

export const maxLength = maxLengthCreator(100);
const Dialogs = (props) => {
    const state = props.dialogsPage;

    const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    const messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);

    const addNewMessage = (values) => {
        props.sendMessageCreator(values.newMessageBody);
        values.newMessageBody = '';
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={TextArea} validate={[required, maxLength]} name="newMessageBody"
                   placeholder="Enter your message"/>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};
const AddMessageFormRedux = reduxForm({form: 'dialogMessageForm'})(AddMessageForm);
export default Dialogs;