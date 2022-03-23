import React from "react";
import "./ChatPage.scss";
import ChatPageWelcome from "src/pages/ChatPageWelcome";
import Chat from "src/components/Chat";
import DropdownActions from "src/components/DropdownActions";
import {useTypedSelector} from "src/hooks";
import ProtectionModal from "src/components/ProtectionModal";
import ChatDialogs from "src/components/ChatDialogs";
import StatusWindow from "src/components/StatusWindow";

const ChatPage: React.VFC = () => {
  const {isChatShown} = useTypedSelector(state => state);

  return (
    <div className='wrapperChatPage'>
      <DropdownActions />
      <ProtectionModal />
      <StatusWindow />

      <div className="chat">
        <div className='leftBar'>
          <ChatDialogs />
        </div>

        <div className='rightBar'>
          {
            isChatShown ?
              <Chat /> :
              <ChatPageWelcome/>
          }
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
