import {IRootState, RootAction, RootActionTypes} from "src/store/types";

const initialState: IRootState = {
    isDropdownShown: false,
    isFocused: false,
    isChatShown: false,
    isProtectionModalShown: false,
    isUserStatusWindowShown: false,
    isMessageFromAuthorizedUser: false,
    isDropdownForDialog: false,
    isDropdownForChatMessage: false,
    isDropdownForAuthorizedUser: false,
    isDropdownForUser: false,
    isDropdownForImageMessage: false,
    coordinates: {
        top: '',
        right: '',
        left: '',
        xSpace: '',
        ySpace: '',
    },
    chatInfo: {
        id: '',
        userName: '',
        userPhoto: '',
        messageTime: '',
        message: '',
    },
    listsOfActions: {
        forDialog: [
         'В архив',
         'Без звука',
         'Удалить чат',
         'Закрепить чат',
         'Пометить как непрочитанное'
        ],
        forChatMessage: [
            'Ответить',
            'Переслать сообщение',
            'Добавить сообщение в Избранные',
            'Удалить собщение',
        ],
        forImageMessage: [
            'Ответить',
            'Загрузить',
            'Переслать сообщение',
            'Добавить сообщение в Избранные',
            'Удалить собщение',
        ],
        forAuthorizedUser: [
            'Новая группа',
            'Избранные сообщение',
            'Настройки',
            'Выйти',
        ],
        forUser: [
            'Данные контакта ',
            'Выбрать сообщение',
            'Закрыть чат',
            'Без звука',
            'Очистить чат',
            'Удалить чат',
        ]
    }
}

export const rootReducer = (
    state = initialState,
    action: RootAction
): IRootState => {
    switch (action.type) {
        case RootActionTypes.SHOW_DROPDOWN:
            return {
                ...state,
                isDropdownShown: true,
                coordinates: {
                    top: (action.payload.top + action.payload.ySpace) + 'px',
                    right: (action.payload.right + action.payload.xSpace) + 'px',
                    left: (action.payload.left + action.payload.xSpace) + 'px',
                    xSpace: action.payload.xSpace + 'px',
                    ySpace: action.payload.ySpace + 'px',
                },
            };
        case RootActionTypes.HIDE_DROPDOWN:
            return {
                ...state,
                isDropdownShown: false,
            };
        case RootActionTypes.FOCUS:
            return {
                ...state,
                isFocused: true,
            };

        case RootActionTypes.DEFOCUS:
            return {
                ...state,
                isFocused: false,
            };

        case RootActionTypes.SHOW_CHAT:
            return {
                ...state,
                isChatShown: true,
                chatInfo: {
                    id: action.payload.id,
                    userName: action.payload.userName,
                    userPhoto: action.payload.userPhoto,
                    messageTime: action.payload.messageTime,
                    message: action.payload.message,
                }
            };

        case RootActionTypes.HIDE_CHAT:
            return {
                ...state,
                isChatShown: false,
                chatInfo: {
                    id: '',
                    userName: '',
                    userPhoto: '',
                    messageTime: '',
                    message: '',
                }
            };

        case RootActionTypes.SHOW_PROTECTION_MODAL:
            return {
                ...state,
                isProtectionModalShown: true,
            };

        case RootActionTypes.HIDE_PROTECTION_MODAL:
            return {
                ...state,
                isProtectionModalShown: false,
            }

        case RootActionTypes.SET_IS_MESSAGE_FROM_AUTHORIZED_USER:
            return {
                ...state,
                isMessageFromAuthorizedUser: action.payload,
            }

        case RootActionTypes.SET_IS_DROPDOWN_FOR_DIALOG:
            return {
                ...state,
                isDropdownForDialog: true,
                isDropdownForChatMessage: false,
                isDropdownForAuthorizedUser: false,
                isDropdownForUser: false,
                isDropdownForImageMessage: false,
            }

        case RootActionTypes.SET_IS_DROPDOWN_FOR_CHAT_MESSAGE:
            return {
                ...state,
                isDropdownForDialog: false,
                isDropdownForChatMessage: true,
                isDropdownForAuthorizedUser: false,
                isDropdownForUser: false,
                isDropdownForImageMessage: false,
            }

        case RootActionTypes.SET_IS_DROPDOWN_FOR_AUTHORIZED_USER:
            return {
                ...state,
                isDropdownForDialog: false,
                isDropdownForChatMessage: false,
                isDropdownForAuthorizedUser: true,
                isDropdownForUser: false,
                isDropdownForImageMessage: false,
            }

        case RootActionTypes.SET_IS_DROPDOWN_FOR_USER:
            return {
                ...state,
                isDropdownForDialog: false,
                isDropdownForChatMessage: false,
                isDropdownForAuthorizedUser: false,
                isDropdownForUser: true,
                isDropdownForImageMessage: false,
            }

        case RootActionTypes.SET_IS_DROPDOWN_FOR_IMAGE_MESSAGE:
            return {
                ...state,
                isDropdownForDialog: false,
                isDropdownForChatMessage: false,
                isDropdownForAuthorizedUser: false,
                isDropdownForUser: false,
                isDropdownForImageMessage: true,
            }

        case RootActionTypes.SET_IS_USER_STATUS_WINDOW_SHOWN:
            return {
                ...state,
                isUserStatusWindowShown: action.payload,
            }

        default:
            return state;
    }
}
