import React, {CSSProperties} from "react";
import './ButtonArrow.scss'
import {ReactComponent as ArrowIcon} from "src/assets/icons/ChatPage/arrowIcon.svg";
import {useActions, useTypedSelector} from "src/hooks";
import clsx from "clsx";

interface IProps {
    className?: string;
    style?: CSSProperties;
    isMessageFromAuthorizedUser?: boolean;
}

const ButtonArrow: React.FC<IProps> = (props) => {
    const {className, style, isMessageFromAuthorizedUser} = props;

    const {showDropdown, hideDropdown, setIsMessageFromAuthorizedUser} = useActions();
    const {isDropdownShown} = useTypedSelector(state => state);

    const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        isDropdownShown ?
            hideDropdown() :
            isMessageFromAuthorizedUser ?
                showDropdown(e.clientY, e.clientX, '', -275, 11) :
                showDropdown( e.clientY, '', e.clientX,-10, 11)

        isMessageFromAuthorizedUser ?
            setIsMessageFromAuthorizedUser(true) :
            setIsMessageFromAuthorizedUser(false)
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
