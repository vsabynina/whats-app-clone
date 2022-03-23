import React from "react";
import './EnableNotificationsButton.scss';
import {ReactComponent as NotificationIcon} from "src/assets/icons/ChatPage/notificationIcon.svg";
import {ReactComponent as ArrowIcon} from "src/assets/icons/ChatPage/arrowIcon.svg";

const EnableNotificationsButton: React.VFC = () => {
    return (
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
    )
};

export default EnableNotificationsButton;
