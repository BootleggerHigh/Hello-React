import React, {useEffect, useState} from 'react';

/*
Использование Хука.

  По дабл клику дает возможность изменить свой статус;
  После события onBlur вызывается функция onStatusChange;
  onStatusChange вызывает thunk - UpdateMyStatus;

*/

const ProfileStatusHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    let [status, editStatus] = useState(props.status);
    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.UpdateMyStatus(status);
    };


    const onStatusChange = (event) => {
        editStatus(event.target.value);
    };

    useEffect(() => {
        editStatus(props.status);
    }, [props.status]);
    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>Статус:{props.status}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                       value={status}/>
            </div>
            }
        </div>
    )
};

export default ProfileStatusHooks;