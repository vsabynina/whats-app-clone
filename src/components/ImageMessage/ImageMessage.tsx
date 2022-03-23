import React from "react";
import './ImageMessage.scss';
import {ReactComponent as MessageFromAuthorizedUserArrow} from "src/assets/icons/Chat/messageFromAuthorizedUserArrow.svg";
import {ReactComponent as MessageFromUserArrow} from "src/assets/icons/Chat/messageFromUser.svg";
import clsx from "clsx";
import {ReactComponent as ViewedMessageIcon} from "src/assets/icons/Chat/viewedMessage.svg";
import ButtonArrow from "src/components/ButtonArrow";

interface IProps {
  isMessageFromAuthorizedUser: boolean;
  isFirstMessage: boolean;
  wasRead: boolean;
}

const ImageMessage: React.VFC<IProps> = (props) => {
  const {isMessageFromAuthorizedUser, isFirstMessage, wasRead} = props;

  return (
      <div
          className='imageMessageWrapper'
          style={{
              justifyContent: isMessageFromAuthorizedUser ?
                  'flex-end' :
                  'flex-start'
          }}>
        <div className='imageMessage'>
            {
                isFirstMessage && (
                    isMessageFromAuthorizedUser ?
                        <span className='arrowMessageFromAuthorizedUser'>
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
                        'divImageMessageFromAuthorizedUser divFirstImageMessageFromAuthorizedUserBorder' :
                        'divImageMessageFromAuthorizedUser divImageMessageBorder'
                ) : (
                    isFirstMessage ?
                        'divImageMessageFromUser divFirstImageMessageFromUserBorder' :
                        'divImageMessageFromUser divImageMessageBorder'
                )
            )}>
                <div className='imageWrapper'>
                    <button
                        className='buttonImage'
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation()
                    }}>
                        <div className='gradientBottomImage'></div>

                        <div className='infoImageMessage'>
                            <span>20:52</span>
                            {
                                (isMessageFromAuthorizedUser && wasRead) &&
                                    <span className='viewedMessageIcon'>
                                        <ViewedMessageIcon/>
                                    </span>
                            }
                        </div>
                    </button>

                    <div className='gradientTopImage'>
                        <ButtonArrow
                            className='buttonArrow'
                            isMessageFromAuthorizedUser={isMessageFromAuthorizedUser}
                            showDropdownFor='forImageMessage'
                        />
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
};

export default ImageMessage;
