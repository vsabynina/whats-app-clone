import React from "react";
import './ProtectionButton.scss'
import {ReactComponent as LockIcon} from "src/assets/icons/ChatPage/lockIcon.svg";
import {useActions} from "src/hooks";

const ProtectionButton: React.VFC = () => {
    const {showProtectionModal} = useActions()

    const handleButtonCLick = () => {
        showProtectionModal();
    }

    return (
        <div className='protectionButtonWrapper'>
            <button
                className='protectionButton'
                onClick={() => handleButtonCLick()}
            >
                <p>
                    <span>
                        <LockIcon/>
                    </span>
                    Сообщения и звонки защищены сквозным шифрованием.
                    Третьи лица, включая WhatsApp, не могут прочитать ваши<br/>
                    сообщения или прослушать звонки.
                    Подробнее.
                </p>
            </button>
        </div>
    )
}

export default ProtectionButton;
