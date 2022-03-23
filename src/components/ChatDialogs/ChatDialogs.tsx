import React from "react";
import './ChatDialogs.scss';
import {chats} from "src/mock";
import Dialog from "src/components/Dialog";
import {v4 as uuid4} from "uuid";
import ChatDialogsHeader from "src/components/ChatDialogsHeader/ChatDialogsHeader";
import EnableNotificationsButton from "src/components/EnableNotificationsButton";
import ChatDialogsInput from "src/components/ChatDialogsInput";

const ChatDialogs: React.VFC = () => {
    return (
        <div>
            <ChatDialogsHeader />
            <EnableNotificationsButton />
            <ChatDialogsInput />

            <div className='dialogs'>
                {chats.map((item, index) =>{
                    return <Dialog
                        key={item.messages.find(el => el.userId !== 'authorizedUser.userId')?.userId || uuid4()}
                        id={item.messages.find(el => el.userId !== 'authorizedUser.userId')?.userId || uuid4()}
                        userName={item.messages.find(el => el.userName !== 'authorizedUser.userName')?.userName || `Contact ${index}`}
                        userPhoto={item.messages.find(el => el.userPhoto !== 'authorizedUser.userPhoto')?.userPhoto}
                        messageTime={item.lastUpdate}
                        message={item.messages.find(el => el.messageTime === item.lastUpdate)?.message || ''}
                    />
                })}
            </div>
        </div>
    )
};

export default ChatDialogs;
