import React from "react";
import './ChatFooter.scss';
import {ReactComponent as SmileIcon} from "src/assets/icons/ChatFooter/smileIcon.svg";
import {ReactComponent as ClipIcon} from "src/assets/icons/ChatFooter/clipIcon.svg";
import {ReactComponent as MicrophoneIcon} from "src/assets/icons/ChatFooter/microphoneIcon.svg";

const ChatFooter: React.VFC = () => {
    return (
        <footer>
            <div className='footerIconsWrapper'>
                <button>
                    <SmileIcon />
                </button>
                <button>
                    <ClipIcon />
                </button>
            </div>

            <input
                type='text'
                placeholder='Введите сообщение'
            />

            <button>
                <MicrophoneIcon />
            </button>
        </footer>
    )
}

export default ChatFooter;
