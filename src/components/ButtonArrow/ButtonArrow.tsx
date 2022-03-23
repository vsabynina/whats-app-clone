import React, {CSSProperties} from "react";
import './ButtonArrow.scss'
import {ReactComponent as ArrowIcon} from "src/assets/icons/ChatPage/arrowIcon.svg";
import {useActions, useTypedSelector} from "src/hooks";
import clsx from "clsx";

interface IProps {
    className?: string;
    style?: CSSProperties;
    isMessageFromAuthorizedUser?: boolean;
    showDropdownFor:
        'dialog' |
        'chatMessage' |
        'authorizedUser' |
        'user' |
        'forImageMessage';
}

const ButtonArrow: React.FC<IProps> = (props) => {
    const {className, style, isMessageFromAuthorizedUser, showDropdownFor} = props;

    const {
        showDropdown,
        hideDropdown,
        setIsMessageFromAuthorizedUser,
        setIsDropdownForDialog,
        setIsDropdownForAuthorizedUser,
        setIsDropdownForUser,
        setIsDropdownForChatMessage,
        setIsDropdownForImageMessage
    } = useActions();

    const {isDropdownShown} = useTypedSelector(state => state);

    const showOrHideDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
        isDropdownShown ?
            hideDropdown() :
            isMessageFromAuthorizedUser ?
                showDropdown(e.clientY, e.clientX, '', -314, 11) :
                showDropdown( e.clientY, '', e.clientX,-10, 11)
    }

    const handleIsMessageFromAuthorizedUser = () => {
        isMessageFromAuthorizedUser ?
            setIsMessageFromAuthorizedUser(true) :
            setIsMessageFromAuthorizedUser(false)
    }

    const handleShowDropdownFor = () => {
        showDropdownFor === 'dialog' && setIsDropdownForDialog(true);
        showDropdownFor === 'chatMessage' && setIsDropdownForChatMessage(true);
        showDropdownFor === 'authorizedUser' && setIsDropdownForAuthorizedUser(true);
        showDropdownFor === 'user' && setIsDropdownForUser(true);
        showDropdownFor === 'forImageMessage' && setIsDropdownForImageMessage(true);
    }

    const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        showOrHideDropdown(e);
        handleIsMessageFromAuthorizedUser();
        handleShowDropdownFor();
    }

    return (
        <button
            className={clsx('arrowIconWrapper', className)}
            onClick={(e) => handleClickButton(e)}
            style={style}
        >
            <span>
                <ArrowIcon />
            </span>
        </button>
    )
};

export default ButtonArrow;
