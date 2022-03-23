import React, {useEffect, useState} from "react";
import './Chat.scss'
import {useParams} from "react-router-dom";
import MissedCall from "src/components/MissedCall";
import ProtectionButton from "src/components/ProtectionButton";
import Time from "src/components/Time";
import ChatHeader from "src/components/ChatHeader";
import Message from "src/components/Message";
import ChatFooter from "src/components/ChatFooter";
import ImageMessage from "src/components/ImageMessage";
import ButtonScrollBottom from "src/components/ButtonScrollBottom";

const Chat:React.VFC = () => {
    const { id } = useParams() as { id: string | number};
    const [isButtonScrollBottomShown, setIsButtonScrollBottomShown] = useState<boolean>(false);

    useEffect(() => {
        const scrollDiv = document.getElementById('scrollChatMain');
        const showOnPx = 1000;
        scrollDiv?.scrollTo(0, scrollDiv.scrollHeight);
        scrollDiv?.addEventListener('scroll', () => {
            scrollDiv.scrollTop > showOnPx ?
            setIsButtonScrollBottomShown(false) :
                setIsButtonScrollBottomShown(true);
        });
    }, []);

    const handleClickButtonScrollTop = () => {
        const scrollDiv = document.getElementById('scrollChatMain');
        scrollDiv?.scrollTo({
            top: scrollDiv?.scrollHeight,
            behavior: 'smooth',
        });
    };

    return (
        <div className='chatWrapper'>
            <ChatHeader />

            <main id='scrollChatMain'>
                    <div className='messagesWrapper'>
                        <ButtonScrollBottom
                            onCLick={handleClickButtonScrollTop}
                            isButtonScrollBottomShown={isButtonScrollBottomShown}
                        />
                            <div className='messagesSpace'></div>
                            <ProtectionButton />
                            <Message isMessageFromAuthorizedUser={true} isFirstMessage={true} wasRead={true} />
                            <Message isMessageFromAuthorizedUser={true} isFirstMessage={false} wasRead={true} />
                            <Time />
                            <Message isMessageFromAuthorizedUser={false} isFirstMessage={true} wasRead={false} />
                            <Message isMessageFromAuthorizedUser={false} isFirstMessage={false} wasRead={false} />
                            <MissedCall />
                            <Message isMessageFromAuthorizedUser={false} isFirstMessage={true} wasRead={false} />
                            <Message isMessageFromAuthorizedUser={false} isFirstMessage={false} wasRead={false} />
                            <MissedCall />
                            <Message isMessageFromAuthorizedUser={false} isFirstMessage={true} wasRead={false} />
                            <Message isMessageFromAuthorizedUser={false} isFirstMessage={false} wasRead={false} />
                            <MissedCall />
                            <MissedCall />
                            <Message isMessageFromAuthorizedUser={false} isFirstMessage={true} wasRead={false} />
                            <Message isMessageFromAuthorizedUser={false} isFirstMessage={false} wasRead={false} />
                            <MissedCall />
                            <MissedCall />
                            <Message isMessageFromAuthorizedUser={false} isFirstMessage={true} wasRead={false} />
                            <Message isMessageFromAuthorizedUser={false} isFirstMessage={false} wasRead={false} />
                            <MissedCall />
                            <MissedCall />
                            <Message isMessageFromAuthorizedUser={false} isFirstMessage={true} wasRead={false} />
                            <Message isMessageFromAuthorizedUser={false} isFirstMessage={false} wasRead={false} />
                            <MissedCall />
                            <ImageMessage isMessageFromAuthorizedUser={true} isFirstMessage={true} wasRead={true} />
                    </div>
            </main>

            <ChatFooter />
      </div>
    )
}

export default Chat
