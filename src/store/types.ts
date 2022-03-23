export interface IRootState {
    isDropdownShown: boolean;
    isFocused: boolean;
    isChatShown: boolean;
    isProtectionModalShown: boolean;
    isMessageFromAuthorizedUser: boolean;
    isUserStatusWindowShown: boolean;
    coordinates: ICoordinates;
    chatInfo: IChatInfo;
    listsOfActions: IListsOfActions;
    isDropdownForDialog: boolean,
    isDropdownForChatMessage: boolean,
    isDropdownForAuthorizedUser: boolean,
    isDropdownForUser: boolean,
    isDropdownForImageMessage: boolean,
}

export interface ICoordinates {
    top: string;
    right: string;
    left: string;
    xSpace?: string;
    ySpace?: string;
}

interface IChatInfo {
    id: string | number;
    userName: string;
    userPhoto?: string;
    messageTime: string;
    message: string;
}

interface IListsOfActions {
    forDialog: Array<string>;
    forChatMessage: Array<string>;
    forImageMessage: Array<string>;
    forAuthorizedUser: Array<string>;
    forUser: Array<string>;
}


export type RootAction =
    IShowDropdown |
    IHideDropdown |
    IFocus |
    IDefocus |
    IShowChat |
    IHideChat |
    IShowProtectionModal |
    IHideProtectionModal |
    ISetIsMessageFromAuthorizedUser |
    ISetIsDropdownForDialog |
    ISetIsDropdownForChatMessage |
    ISetIsDropdownForAuthorizedUser |
    ISetIsDropdownForUser |
    ISetIsDropdownForImageMessage |
    ISetIsUserStatusWindowShown;

export enum RootActionTypes {
    SHOW_DROPDOWN = 'SHOW_DROPDOWN',
    HIDE_DROPDOWN = 'HIDE_DROPDOWN',
    FOCUS = 'FOCUS',
    DEFOCUS = 'DEFOCUS',
    SHOW_CHAT = 'SHOW_CHAT',
    HIDE_CHAT = 'HIDE_CHAT',
    SHOW_PROTECTION_MODAL = 'SHOW_PROTECTION_MODAL',
    HIDE_PROTECTION_MODAL = 'HIDE_PROTECTION_MODAL',
    SET_IS_MESSAGE_FROM_AUTHORIZED_USER = 'SET_IS_MESSAGE_FROM_AUTHORIZED_USER',
    SET_IS_DROPDOWN_FOR_DIALOG = 'SET_IS_DROPDOWN_FOR_DIALOG',
    SET_IS_DROPDOWN_FOR_CHAT_MESSAGE = 'SET_IS_DROPDOWN_FOR_CHAT_MESSAGE',
    SET_IS_DROPDOWN_FOR_AUTHORIZED_USER = 'SET_IS_DROPDOWN_FOR_AUTHORIZED_USER',
    SET_IS_DROPDOWN_FOR_USER = 'SET_IS_DROPDOWN_FOR_USER',
    SET_IS_DROPDOWN_FOR_IMAGE_MESSAGE = 'SET_IS_DROPDOWN_FOR_IMAGE_MESSAGE',
    SET_IS_USER_STATUS_WINDOW_SHOWN = 'SET_IS_USER_STATUS_WINDOW_SHOWN',
}

interface IShowDropdown {
    type: RootActionTypes.SHOW_DROPDOWN,
    payload: {
        top: string;
        right: string;
        left: string;
        xSpace?: string;
        ySpace?: string;
    }
}

interface IHideDropdown {
    type: RootActionTypes.HIDE_DROPDOWN,
}

interface IFocus {
    type: RootActionTypes.FOCUS,
}

interface IDefocus {
    type: RootActionTypes.DEFOCUS,
}

interface IShowChat {
    type: RootActionTypes.SHOW_CHAT,
    payload: {
        id: string | number,
        userName: string,
        userPhoto?: string,
        messageTime: string;
        message: string;
    }
}

interface IHideChat {
    type: RootActionTypes.HIDE_CHAT,
}

interface IShowProtectionModal {
    type: RootActionTypes.SHOW_PROTECTION_MODAL,
}

interface IHideProtectionModal {
    type: RootActionTypes.HIDE_PROTECTION_MODAL,
}

interface ISetIsMessageFromAuthorizedUser {
    type: RootActionTypes.SET_IS_MESSAGE_FROM_AUTHORIZED_USER,
    payload: boolean,
}

interface ISetIsDropdownForDialog {
    type: RootActionTypes.SET_IS_DROPDOWN_FOR_DIALOG,
    payload: boolean,
}

interface ISetIsDropdownForChatMessage {
    type: RootActionTypes.SET_IS_DROPDOWN_FOR_CHAT_MESSAGE,
    payload: boolean,
}

interface ISetIsDropdownForAuthorizedUser {
    type: RootActionTypes.SET_IS_DROPDOWN_FOR_AUTHORIZED_USER,
    payload: boolean,
}

interface ISetIsDropdownForUser {
    type: RootActionTypes.SET_IS_DROPDOWN_FOR_USER,
    payload: boolean,
}

interface ISetIsDropdownForImageMessage {
    type: RootActionTypes.SET_IS_DROPDOWN_FOR_IMAGE_MESSAGE,
    payload: boolean,
}

interface ISetIsUserStatusWindowShown {
    type: RootActionTypes.SET_IS_USER_STATUS_WINDOW_SHOWN,
    payload: boolean,
}

