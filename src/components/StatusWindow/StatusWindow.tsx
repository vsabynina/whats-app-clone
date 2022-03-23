import React from 'react';
import './StatusWindow.scss';
import {useActions, useTypedSelector} from "src/hooks";
import {ReactComponent as UserIcon} from "src/assets/icons/ChatPage/userIcon.svg";
import {ReactComponent as StatusIcon} from "src/assets/icons/StatusWindow/statusIcon.svg";
import {ReactComponent as CrossIcon} from "src/assets/icons/StatusWindow/crossIcon.svg";
import {setIsUserStatusWindowShown} from "src/store/actionCreators";
import clsx from "clsx";

const StatusWindow: React.VFC = () => {
    const {isUserStatusWindowShown, chatInfo} = useTypedSelector(state => state);
    const {setIsUserStatusWindowShown} = useActions();

    const handleCloseButtonClick = () => {
        setIsUserStatusWindowShown(false);
    };

    return (
        <div className={clsx('statusWindow', !isUserStatusWindowShown && 'hideStatusWindow')}>
            <div className='statusWindowWrapper'>
                <div className='leftBar'>
                    <div className='userInfo'>
                        <div className='userIconWrapper'>
                            {
                                !chatInfo.userPhoto || chatInfo.userPhoto === '' ?
                                    <UserIcon className='dialogUserIcon' />
                                    : <div style={{backgroundImage: `url(${chatInfo.userPhoto})`}} className='dialogUserPhoto'></div>
                            }
                        </div>

                        <div className='textWrapper'>
                            <h1>Мой статус</h1>
                            <p>Нет обновлений</p>
                        </div>
                    </div>
                </div>

                <div className='rightBar'>
                    <button
                        className='closeButton'
                        onClick={handleCloseButtonClick}
                    >
                        <CrossIcon />
                    </button>

                    <div className='statusInfoWrapper'>
                        <div className='statusIconWrapper'>
                            <StatusIcon />
                        </div>

                        <p>Нажмите на имя контакта, чтобы увидеть статус</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default StatusWindow;
