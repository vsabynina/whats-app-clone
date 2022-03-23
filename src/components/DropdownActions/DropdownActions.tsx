import React from "react";
import './DropdownActions.scss'
import clsx from "clsx";
import {useTypedSelector} from "src/hooks";

const DropdownActions:React.VFC = () => {
    const {
        coordinates,
        isDropdownShown,
        isMessageFromAuthorizedUser,
        listsOfActions,
        isDropdownForDialog,
        isDropdownForChatMessage,
        isDropdownForAuthorizedUser,
        isDropdownForUser,
        isDropdownForImageMessage
    } = useTypedSelector(state => state);

    const createList = (type: 'forDialog' | 'forChatMessage' | 'forAuthorizedUser' | 'forUser' | 'forImageMessage') => {
        switch (type) {
            case 'forDialog':
                return listsOfActions.forDialog.map(item => {
                    return <li>{item}</li>;
                })

            case 'forChatMessage':
                return listsOfActions.forChatMessage.map(item => {
                    return <li>{item}</li>;
                })

            case 'forAuthorizedUser':
                return listsOfActions.forAuthorizedUser.map(item => {
                    return <li>{item}</li>;
                })

            case 'forUser':
                return listsOfActions.forUser.map(item => {
                    return <li>{item}</li>;
                })

            case 'forImageMessage':
                return listsOfActions.forImageMessage.map(item => {
                return <li>{item}</li>;
            })
        }
    };

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
                {
                    isDropdownForDialog && createList('forDialog') ||
                    isDropdownForChatMessage && createList('forChatMessage') ||
                    isDropdownForAuthorizedUser && createList('forAuthorizedUser') ||
                    isDropdownForUser && createList('forUser') ||
                    isDropdownForImageMessage && createList('forImageMessage')
                }
            </ul>
        </div>
    )
};

export default DropdownActions;
