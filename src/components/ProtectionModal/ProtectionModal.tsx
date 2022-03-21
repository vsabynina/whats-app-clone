import React from "react";
import './ProtectionModal.scss'
import {useActions, useTypedSelector} from "src/hooks";
import clsx from "clsx";

const ProtectionModal: React.VFC = () => {
    const {isProtectionModalShown} = useTypedSelector(state => state);
    const {hideProtectionModal} = useActions();

    const handleButtonClick = () => {
        hideProtectionModal()
    };

    return (
        <div className={clsx(
            'protectionModalWrapper',
            isProtectionModalShown ?
                'showProtectionModalWrapper' :
                'hideProtectionModalWrapper'
            )}>
            <div className={clsx(
                'protectionModal',
                isProtectionModalShown ?
                    'showProtectionModal' :
                    'hideProtectionModal'
                )}>
                <h1>
                    Ваше общение в WhatsApp защищено<br/>
                    сквозным шифрованием.
                </h1>
                <p>
                    Ваши сообщения доступны только вам<br/>
                    и пользователям или компаниям, с которыми вы<br/>
                    общаетесь. Даже WhatsApp не может прочитать<br/>
                    или прослушать их.
                    <a
                        rel="noopener noreferrer"
                        href="https://www.whatsapp.com/security/?lg=ru"
                        target="_blank"
                    >
                        &nbsp;Подробнее
                    </a>
                </p>

                <div className='buttonWrapper'>
                    <button
                        onClick={() => handleButtonClick()}
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ProtectionModal;
