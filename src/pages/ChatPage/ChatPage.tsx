import React, { useState } from "react";
import "./ChatPage.scss";
import connectingPhone from "src/assets/images/connectingPhone.jpg";
import { ReactComponent as LaptopIcon } from "src/assets/icons/ChatPage/laptopIcon.svg";
import { ReactComponent as UserIcon } from "src/assets/icons/ChatPage/userIcon.svg";
import { ReactComponent as StatusIcon } from "src/assets/icons/ChatPage/statusIcon.svg";
import { ReactComponent as NewChatIcon } from "src/assets/icons/ChatPage/newChatIcon.svg";
import { ReactComponent as MenuIcon } from "src/assets/icons/ChatPage/menuIcon.svg";
import { ReactComponent as NotificationIcon } from "src/assets/icons/ChatPage/notificationIcon.svg";
import { ReactComponent as ArrowIcon } from "src/assets/icons/ChatPage/arrowIcon.svg";
import { ReactComponent as SearchIcon } from "src/assets/icons/ChatPage/searchIcon.svg";
import { ReactComponent as ArrowSearchIcon } from "src/assets/icons/ChatPage/arrowSearchIcon.svg";

const ChatPage: React.VFC = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="wrapperChatPage">
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
            <span className={isFocused ? "hideOpacity" : ""}>
              Поиск или новый чат
            </span>
            <button>
              <div>
                <ArrowSearchIcon
                  className={
                    isFocused ? "showArrowSearchIcon" : " hideArrowSearchIcon"
                  }
                />

                <SearchIcon
                  className={isFocused ? " hideSearchIcon" : "showSearchIcon"}
                />
              </div>
            </button>
            <input
              type="text"
              onFocus={() => setIsFocused((prevState) => !prevState)}
              onBlur={(e) => {
                setIsFocused(false);
                e.target.value = "";
              }}
            />
          </label>
        </div>
      </div>

      <div className="rightBar">
        <div className="welcomingDiv">
          <img src={connectingPhone} />
          <div className="textWrapper">
            <h1>Не отключайте свой телефон</h1>
            <p>
              WhatsApp подключается к вашему телефону, чтобы синхронизировать
              сообщения. Чтобы снизить трафик данных, подключите телефон к
              Wi-Fi.
            </p>
            <div className="textSeparator"></div>
            <div className="downloadAppWrapper">
              <LaptopIcon className="laptopIcon" />
              <div className="downloadApp">
                Звоните с компьютера при помощи WhatsApp для Windows.{" "}
                <a href="https://www.whatsapp.com/download" target="_blank">
                  Скачайте здесь
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
