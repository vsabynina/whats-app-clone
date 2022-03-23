import React from "react";
import {ReactComponent as UserIcon} from "src/assets/icons/ChatPage/userIcon.svg";
import {ReactComponent as SearchIcon} from "src/assets/icons/Chat/searchIcon.svg";
import {ReactComponent as MenuIcon} from "src/assets/icons/ChatPage/menuIcon.svg";
import {useTypedSelector} from "src/hooks";
import ButtonMenu from "src/components/ButtonMenu";

const ChatHeader: React.VFC = () => {
    const {chatInfo} = useTypedSelector(state => state);
    return (
        <header>
            <div className='userPhotoAndName'>
                <button>
                    {
                        !chatInfo.userPhoto || chatInfo.userPhoto === '' ?
                            <UserIcon className='chatUserIcon'/> :
                            <div style={{backgroundImage: `url(${chatInfo.userPhoto})`}} className='chatUserPhoto'></div>

                    }
                </button>

                <button>
                    <h1 className='userName'>{chatInfo.userName}</h1>
                </button>
            </div>

            <div className='actionsWithChat'>
                <button>
                    <SearchIcon/>
                </button>

                <ButtonMenu showDropdownFor='user' />
            </div>
        </header>
    )
};

export default  ChatHeader;
