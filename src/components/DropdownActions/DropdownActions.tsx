import React from "react";
import './DropdownActions.scss'
import clsx from "clsx";
import {useTypedSelector} from "src/hooks";

const DropdownActions:React.VFC = () => {
    const {coordinates, isDropdownShown, isMessageFromAuthorizedUser, listsOfActions} = useTypedSelector(state => state)

    return (
        <div
            className={clsx(
                'dropdownActionsWithDialog',
                isDropdownShown ?
                    'showDropdownActionsWithDialog' :
                    'hideDropdownActionsWithDialog'
            )}
            style={
                isMessageFromAuthorizedUser ?
                    {top: coordinates.top, left: coordinates.right} :
                    {top: coordinates.top, left: coordinates.left,}
            }
        >
            <ul>
                {listsOfActions.forDialog.map((item:string) => {
                    return <li>{item}</li>
                })}
                  {/*<li>В архив</li>*/}
                  {/*<li>Без звука</li>*/}
                  {/*<li>Удалить чат</li>*/}
                  {/*<li>Закрепить чат</li>*/}
                  {/*<li>Пометить как непрочитанное</li>*/}
            </ul>
        </div>
    )
};

export default DropdownActions;
