import React from "react";
import './ButtonScrollBottom.scss';
import {ReactComponent as ArrowIcon} from "src/assets/icons/ChatPage/arrowIcon.svg";
import clsx from "clsx";

interface IProps {
    onCLick:() => void;
    isButtonScrollBottomShown: boolean;
}

const ButtonScrollBottom: React.FC<IProps> = (props) => {
    const {onCLick, isButtonScrollBottomShown} = props;

    return (
        <button
            className={clsx('buttonScrollTop', isButtonScrollBottomShown ? 'showButtonScrollTop' : 'hideButtonScrollTop')}
            onClick={onCLick}
        >
            <ArrowIcon />
        </button>
    )
};

export default ButtonScrollBottom;
