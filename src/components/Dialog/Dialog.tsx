import React from "react";
import {ReactComponent as UserIcon} from "src/assets/icons/ChatPage/userIcon.svg";
import './Dialog.scss'
import {useActions} from "src/hooks";
import ButtonArrow from "src/components/ButtonArrow";

interface IProps {
    id: number | string;
    userName: string;
    userPhoto?: string;
    messageTime: string;
    message: string | number;
}

const Dialog: React.FC<IProps> = (props) => {
    const {showChat} = useActions();
    const {id, userName, messageTime, message, userPhoto} = props;

    const handleClickDialog = (
        e: React.MouseEvent<HTMLDivElement>,
        id: string | number,
        userName: string,
        messageTime: string,
        message: string | number,
        userPhoto?: string,
    ) => {
        e.stopPropagation()
        showChat(
            id,
            userName,
            messageTime,
            message,
            userPhoto,
        );
    }

    return (
        <div className='dialog' onClick={(e) =>
            handleClickDialog(
                e,
                id,
                userName,
                messageTime,
                message,
                userPhoto,
            )}>
            <div className='userIconWrapper'>
                {
                    !userPhoto || userPhoto === '' ?
                        <UserIcon className='dialogUserIcon'/>
                        : <div style={{backgroundImage: `url(${userPhoto})`}} className='dialogUserPhoto'></div>
                }
            </div>

            <div className='dialogMessageDataWrapper'>
                <div className='userNameAndMessageTime'>
                    <h1>{userName}</h1>
                    <h2>{new Date(messageTime).toLocaleDateString()}</h2>
                </div>

                <div className='dialogMessageText'>
                    <p>{message}</p>
                </div>
            </div>
            <ButtonArrow
                className='buttonArrow'
                showDropdownFor='dialog'
            />
        </div>
    )
}

export default Dialog;
