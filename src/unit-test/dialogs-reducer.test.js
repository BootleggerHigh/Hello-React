import dialogsReducer, {sendMessageCreator} from "../redux/dialogs-reducer";

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Скинь сотку,на пивас не хватает'},
        {id: 3, message: 'Чё по UI?'},
        {id: 4, message: 'Тяжел React?'},
        {id: 5, message: 'Ты живой?'}
    ],
    newMessageBody: ""
};

it("add message", () => {
    let action = sendMessageCreator("Test");
    let Test = dialogsReducer(initialState, action);

    expect(Test.messages.length).toBe(6);
});

it("text message should be Test", () => {
    let action = sendMessageCreator("Test");
    let Test = dialogsReducer(initialState, action);

    expect(Test.messages[5].message).toBe("Test");
});