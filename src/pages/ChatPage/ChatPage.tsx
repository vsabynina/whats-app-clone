import React, {useRef} from "react";
import "./ChatPage.scss";
import { ReactComponent as UserIcon } from "src/assets/icons/ChatPage/userIcon.svg";
import { ReactComponent as StatusIcon } from "src/assets/icons/ChatPage/statusIcon.svg";
import { ReactComponent as NewChatIcon } from "src/assets/icons/ChatPage/newChatIcon.svg";
import { ReactComponent as MenuIcon } from "src/assets/icons/ChatPage/menuIcon.svg";
import { ReactComponent as NotificationIcon } from "src/assets/icons/ChatPage/notificationIcon.svg";
import { ReactComponent as ArrowIcon } from "src/assets/icons/ChatPage/arrowIcon.svg";
import { ReactComponent as SearchIcon } from "src/assets/icons/ChatPage/searchIcon.svg";
import { ReactComponent as ArrowSearchIcon } from "src/assets/icons/ChatPage/arrowSearchIcon.svg";
import Dialog from "src/components/Dialog";
import clsx from "clsx";
import {chats} from "src/mock";
import ChatPageWelcome from "src/pages/ChatPageWelcome";
import Chat from "src/components/Chat";
import DropdownActions from "src/components/DropdownActions";
import { v4 as uuid4 } from 'uuid';
import {useActions, useTypedSelector} from "src/hooks";
import ProtectionModal from "src/components/ProtectionModal";

const ChatPage: React.VFC = () => {
  const {focus, defocus} = useActions();
  const {isFocused, isChatShown} = useTypedSelector(state => state);

  const inputElement = useRef<HTMLInputElement>(null);

  return (
    <div className='wrapperChatPage'>
      <DropdownActions />
      <ProtectionModal />

      <div className="chat">
        <div className="leftBar">
        <div className="panelHeader">
          <button>
            <UserIcon className="userIcon" />
          </button>

          <div className="iconWrapper">
            <button>
              <StatusIcon />
            </button>

            <button>
              <NewChatIcon />
            </button>

            <button>
              <MenuIcon />
            </button>
          </div>
        </div>

        <div className="notificationDiv">
          <NotificationIcon />
          <div className="notificationText">
            <h1>
              Получать оповещения о новых
              <br />
              сообщениях
            </h1>
            <div className="enableNotifications">
              <p>Включить уведомления на рабочем столе</p>
              <ArrowIcon />
            </div>
          </div>
        </div>

        <div className="findChatDiv">
          <label className="findChatInput">
            <span className={clsx(isFocused && 'hideOpacity')}>
              Поиск или новый чат
            </span>

            <button onClick={() => {
              isFocused ? defocus() : focus();
            }}>
              <ArrowSearchIcon className={clsx(isFocused ? "showArrowSearchIcon" : "hideArrowSearchIcon")}/>
              <SearchIcon className={clsx(isFocused ? "hideSearchIcon" : "showSearchIcon")}/>
            </button>

            <input
              type="text"
              onFocus={focus}
              onBlur={(e) => {
                defocus();
                e.target.value = "";
              }}
              ref={inputElement}
            />
          </label>
        </div>

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
