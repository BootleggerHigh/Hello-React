/*Валидаторы на redux формы.
required - пустое поле;
maxLengthCreator - максимальное количество символов для это поле;
*/
export const required = (value) => {
    if (value) return undefined;
    return "Field is required";

};
export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is a ${maxLength} symbols`;
    return undefined;

};