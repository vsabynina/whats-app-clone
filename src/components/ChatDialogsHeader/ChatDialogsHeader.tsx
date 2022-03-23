import React, {useState} from "react";
import './ChatDialogsHeader.scss';
import {ReactComponent as UserIcon} from "src/assets/icons/ChatPage/userIcon.svg";
import {ReactComponent as StatusIcon} from "src/assets/icons/ChatPage/statusIcon.svg";
import {ReactComponent as NewChatIcon} from "src/assets/icons/ChatPage/newChatIcon.svg";
import ButtonMenu from "src/components/ButtonMenu";
import {useActions} from "src/hooks";
import {setIsUserStatusWindowShown} from "src/store/actionCreators";

const ChatDialogsHeader: React.VFC = () => {
    const {setIsUserStatusWindowShown} = useActions()

    const handleClickStatusButton = () => {
        setIsUserStatusWindowShown(true);
    };

    return (
        <div className="panelHeader">
            <button>
                <UserIcon className="userIcon" />
            </button>

            <div className="iconWrapper">
                <button onClick={handleClickStatusButton}>
                    <StatusIcon />
                </button>

                <button>
                    <NewChatIcon />
                </button>

                <ButtonMenu showDropdownFor='authorizedUser'/>
            </div>
        </div>
    )
};

export default ChatDialogsHeader;
