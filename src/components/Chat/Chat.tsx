import React from "react";
import './Chat.scss'
import {useParams} from "react-router-dom";
import {useTypedSelector} from "src/hooks";
import MissedCall from "src/components/MissedCall";
import ProtectionButton from "src/components/ProtectionButton";
import Time from "src/components/Time";
import ChatHeader from "src/components/ChatHeader";
import Message from "src/components/Message";
import ImageMessage from "src/components/ImageMessage";
import ChatFooter from "src/components/ChatFooter";

const Chat:React.VFC = () => {
    const {chatInfo} = useTypedSelector(state => state)

    const { id } = useParams() as { id: string | number}

    return(
        <div className='chatWrapper'>
            <ChatHeader />

            <main>
                <div className='messagesWrapper'>
                    <div className='scroll'>
                        <div className='messagesSpace'></div>
                        <ProtectionButton />
                        <Message isMessageFromAuthorizedUser={true} isFirstMessage={true} wasRead={true} />
                        <Message isMessageFromAuthorizedUser={true} isFirstMessage={false} wasRead={true} />
                        <Time />
                        <Message isMessageFromAuthorizedUser={false} isFirstMessage={true} wasRead={false} />
                        <Message isMessageFromAuthorizedUser={false} isFirstMessage={false} wasRead={false} />
                        <MissedCall />
                    </div>
                </div>
            </main>

            <ChatFooter />
      </div>
    )
}

export default Chat
