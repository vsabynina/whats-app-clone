import {RootActionTypes} from "src/store/types";
import {validate} from "uuid";

export const showDropdown = (top: number, right: number | string, left: number | string, xSpace = 0 , ySpace = 0) => {
    return {
        type: RootActionTypes.SHOW_DROPDOWN,
        payload: {
            top: top,
            right: right,
            left: left,
            xSpace: xSpace,
            ySpace: ySpace,
        }
    }
};

export const hideDropdown = () => {
    return {
        type: RootActionTypes.HIDE_DROPDOWN,
    }
};

export const focus = () => {
    return {
        type: RootActionTypes.FOCUS,
    }
};

export const defocus = () => {
    return {
        type: RootActionTypes.DEFOCUS,
    }
};

export const showChat = (
    id: string | number,
    userName: string,
    messageTime: string,
    message: string | number,
    userPhoto?: string
) => {
    return {
        type: RootActionTypes.SHOW_CHAT,
        payload: {
            id: id,
            userName: userName,
            userPhoto: userPhoto,
            messageTime: messageTime,
            message: message,
        }
    }
};

export const hideChat = () => {
    return {
        type: RootActionTypes.HIDE_CHAT
    }
};

export const showProtectionModal = () => {
    return {
        type: RootActionTypes.SHOW_PROTECTION_MODAL
    }
};

export const hideProtectionModal = () => {
    return {
        type: RootActionTypes.HIDE_PROTECTION_MODAL
    }
};

export const setIsMessageFromAuthorizedUser = (value: boolean) => {
    return {
        type: RootActionTypes.SET_IS_MESSAGE_FROM_AUTHORIZED_USER,
        payload: value,
    }
}

export const setIsDropdownForDialog = (value: boolean) => {
    return {
        type: RootActionTypes.SET_IS_DROPDOWN_FOR_DIALOG,
        payload: value,
    }
}

export const setIsDropdownForChatMessage = (value: boolean) => {
    return {
        type: RootActionTypes.SET_IS_DROPDOWN_FOR_CHAT_MESSAGE,
        payload: value,
    }
}

export const setIsDropdownForAuthorizedUser = (value: boolean) => {
    return {
        type: RootActionTypes.SET_IS_DROPDOWN_FOR_AUTHORIZED_USER,
        payload: value,
    }
}

export const setIsDropdownForUser = (value: boolean) => {
    return {
        type: RootActionTypes.SET_IS_DROPDOWN_FOR_USER,
        payload: value,
    }
}

export const setIsDropdownForImageMessage = (value: boolean) => {
    return {
        type: RootActionTypes.SET_IS_DROPDOWN_FOR_IMAGE_MESSAGE,
        payload: value,
    }
}

export const setIsUserStatusWindowShown = (value: boolean) => {
    return {
        type: RootActionTypes.SET_IS_USER_STATUS_WINDOW_SHOWN,
        payload: value,
    }
}
