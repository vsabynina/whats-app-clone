import React from "react";
import './Message.scss';
import {ReactComponent as MessageFromAuthorizedUserArrow} from "src/assets/icons/Chat/messageFromAuthorizedUserArrow.svg";
import {ReactComponent as MessageFromUserArrow} from "src/assets/icons/Chat/messageFromUser.svg";
import {ReactComponent as ViewedMessageIcon} from "src/assets/icons/Chat/viewedMessage.svg";
import ButtonArrow from "src/components/ButtonArrow";
import clsx from "clsx";

interface IProps {
    isMessageFromAuthorizedUser: boolean;
    isFirstMessage: boolean;
    wasRead: boolean;
}

const Message: React.FC<IProps> = (props) => {
    const {isMessageFromAuthorizedUser, isFirstMessage, wasRead} = props;

    const styleMessageFromAuthorizedUser = {
        background:
            'radial-gradient(at top right,rgba(var(--outgoing-background),1) 60%,rgba(var(--outgoing-background),0) 80%)'
    }

    const styleMessageFromUser = {
        background:
            'radial-gradient(at top right,rgba(var(--white),1) 60%,rgba(var(--white),0) 80%)'
    }

    return (
        <div
            className='messageWrapper'
            style={{
                justifyContent: isMessageFromAuthorizedUser ?
                        'flex-end' :
                        'flex-start'
            }}
        >
            <div className='message'>
                {
                    isFirstMessage && (
                        isMessageFromAuthorizedUser ?
                            <span className='arrowMessageFromAuthorizedUser' >
                                <MessageFromAuthorizedUserArrow/>
                            </span> :
                            <span className='arrowMessageFromUser' >
                                <MessageFromUserArrow/>
                            </span>
                    )
                }

                <div className={clsx(
                    isMessageFromAuthorizedUser ? (
                        isFirstMessage ?
                        'divMessageFromAuthorizedUser divFirstMessageFromAuthorizedUserBorder' :
                            'divMessageFromAuthorizedUser divMessageBorder'
                        ) : (
                            isFirstMessage ?
                                'divMessageFromUser divFirstMessageFromUserBorder' :
                                'divMessageFromUser divMessageBorder'
                    )
                )}>
                    <div className='pWrapper'>
                        <p>some message from me</p>
                        <div className='messageSpace'></div>
                    </div>

                    <div className='messageInformation'>
                        <p>14:19</p>
                        {
                            (isMessageFromAuthorizedUser && wasRead) &&
                            <span>
                                <ViewedMessageIcon/>
                            </span>
                        }
                    </div>
                </div>

                <ButtonArrow
                    className='buttonArrow'
                    style={
                        isMessageFromAuthorizedUser ?
                            styleMessageFromAuthorizedUser :
                            styleMessageFromUser
                    }
                    isMessageFromAuthorizedUser={isMessageFromAuthorizedUser}
                    showDropdownFor='chatMessage'
                />
            </div>
        </div>
    )
};

export default  Message;
