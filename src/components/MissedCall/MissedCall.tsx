import React from "react";
import './MissedCall.scss'
import {ReactComponent as MissedCallIcon} from "src/assets/icons/MissedCall/missedCall.svg";

const MissedCall = () => {
    return (
        <div className='missedCallWrapper'>
            <div className='missedCall'>
                <div  className='missedCallIconWrapper'>
                    <MissedCallIcon/>
                </div>

                <span>Пропущенный аудиозвонок в 15:50</span>
            </div>
        </div>
    )
};

export default MissedCall;
