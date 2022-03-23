import React, {useRef} from 'react';
import './ChatDialogsInput.scss';
import clsx from "clsx";
import {ReactComponent as ArrowSearchIcon} from "src/assets/icons/ChatPage/arrowSearchIcon.svg";
import {ReactComponent as SearchIcon} from "src/assets/icons/ChatPage/searchIcon.svg";
import {useActions, useTypedSelector} from "src/hooks";

const ChatDialogsInput: React.VFC = () => {
    const {focus, defocus} = useActions();
    const {isFocused} = useTypedSelector(state => state);

    const inputElement = useRef<HTMLInputElement>(null);

    return (
        <div className="findDialogDiv">
            <label className="findDialogInput">
                <span className={clsx(isFocused && 'hideOpacity')}>
                    Поиск или новый чат
                </span>

                <button onClick={() => {
                    isFocused ? defocus() : focus();
                }}>
                    <ArrowSearchIcon className={clsx(isFocused ? "showArrowSearchIcon" : "hideArrowSearchIcon")}/>
                    <SearchIcon className={clsx(isFocused ? "hideSearchIcon" : "showSearchIcon")}/>
                </button>

                <input
                    type="text"
                    onFocus={focus}
                    onBlur={(e) => {
                        defocus();
                        e.target.value = "";
                    }}
                    ref={inputElement}
                />
            </label>
        </div>
    )
};

export default ChatDialogsInput;
