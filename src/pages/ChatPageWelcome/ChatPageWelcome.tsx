import React from "react";
import './ChatPageWelcome.scss'
import {ReactComponent as ChatPageIcon} from "src/assets/icons/ChatPage/chatPageImage.svg";
import {ReactComponent as LockIcon} from "src/assets/icons/ChatPage/lockIcon.svg";
import { ReactComponent as LaptopIcon } from "src/assets/icons/ChatPage/laptopIcon.svg";

const ChatPageWelcome:React.VFC = () => {
  return (
      <div className="welcomingDiv">
          <ChatPageIcon/>
          <div className="textWrapper">
              <h1>WhatsApp Web</h1>
              <p>
                  Теперь вы можете отправлять и получать сообщения без необходимости оставлять телефон подключённым.<br/>
                  Используйте WhatsApp одновременно на четырёх связанных устройствах и одном телефоне.
              </p>

              <div className="textSeparator"></div>

              <div className="downloadAppWrapper">
                  <LaptopIcon className="laptopIcon" />
                  <div className="downloadApp">
                      Звоните с компьютера при помощи WhatsApp для Mac.{" "}
                      <a href="https://www.whatsapp.com/download" target="_blank">
                          Скачайте здесь
                      </a>
                      .
                  </div>
              </div>

              <div className='protectionDiv'>
                  <LockIcon/>
                  Защищено сквозным шифрованием
              </div>
          </div>
      </div>
  )
}

export default ChatPageWelcome;