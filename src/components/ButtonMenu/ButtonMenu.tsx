import React from "react";
import './ButtonMenu.scss';
import {ReactComponent as MenuIcon} from "src/assets/icons/ChatPage/menuIcon.svg";
import clsx from "clsx";
import {useActions, useTypedSelector} from "src/hooks";

interface IProps {
    className?: string;
    showDropdownFor:
        'dialog' |
        'chatMessage' |
        'authorizedUser' |
        'user'|
        'forImageMessage';
}

const ButtonMenu: React.FC<IProps> = (props) => {
    const {showDropdownFor, className} = props;

    const {isDropdownShown} = useTypedSelector(state => state);

    const {
        hideDropdown,
        showDropdown,
        setIsDropdownForDialog,
        setIsDropdownForChatMessage,
        setIsDropdownForAuthorizedUser,
        setIsDropdownForUser,
        setIsDropdownForImageMessage
    } = useActions();

    const showOrHideDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
        isDropdownShown ?
            hideDropdown() :
            showDropdown(e.clientY, '',  e.clientX, -216, 26);
    }

    const handleShowDropdownFor = () => {
        showDropdownFor === 'dialog' && setIsDropdownForDialog(true);
        showDropdownFor === 'chatMessage' && setIsDropdownForChatMessage(true);
        showDropdownFor === 'authorizedUser' && setIsDropdownForAuthorizedUser(true);
        showDropdownFor === 'user' && setIsDropdownForUser(true);
        showDropdownFor === 'forImageMessage' && setIsDropdownForImageMessage(true);
    }

    const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        showOrHideDropdown(e);
        handleShowDropdownFor();
    }

    return (
        <button
            className={clsx('buttonMenu', className)}
            onClick={(e) => handleClickButton(e)}
        >
            <MenuIcon/>
        </button>
    )
}

export default ButtonMenu;
