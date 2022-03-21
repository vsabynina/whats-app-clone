import { v4 as uuid4 } from 'uuid';
import userPhoto from 'src/assets/images/userPhoto.png'

export interface IMessage {
    userName: string,
    userPhoto?:string,
    userId: string | number,
    message: string | number,
    messageTime: string
}

interface IUser {
    name: string,
    photo?: string,
    userId: string | number,
}

export interface IChat {
    lastUpdate: string,
    messages: Array<IMessage>
}

interface IAuthorizedUser {
    userName: string,
    userPhoto?:string,
    userId: string | number,
    phoneNumber: string,
}

const authorizedUser: IAuthorizedUser = {
    userName: 'Алексей Раскольников',
    userPhoto: userPhoto,
    userId: uuid4(),
    phoneNumber: '+375 29 123 45 67',
}

export const users: Array<IUser> = [
    {
        name: 'Елена',
        photo: userPhoto,
        userId: uuid4(),
    },
    {
        name: 'Мария',
        userId: uuid4(),
    },
    {
        name: 'Снежанна',
        userId: uuid4(),
    },
    {
        name: 'Стэйси',
        userId: uuid4(),
    },
    {
        name: 'Кэри',
        userId: uuid4(),
    },
]


export const chats: Array<IChat> = [
    {
        lastUpdate: new Date(2022, 2, 13, 14, 15, 40, 0).toISOString(),
        messages: [
            {
                userName: users[0].name,
                userPhoto: users[0].photo,
                userId: users[0].userId,
                message: 'hello',
                messageTime: new Date(2022, 2, 13, 14, 15, 40, 0).toISOString(),
            },
            {
                userName: users[0].name,
                userPhoto: users[0].photo,
                userId: users[0].userId,
                message: 'whats up',
                messageTime: new Date(2022, 1, 24, 6, 45, 40, 0).toISOString(),
            },
            {
                userName: authorizedUser.userName,
                userPhoto: authorizedUser.userPhoto,
                userId: authorizedUser.userId,
                message: 'hello',
                messageTime: new Date(2022, 1, 24, 6, 45, 40, 0).toISOString(),
            },
        ],
    },
    {
        lastUpdate: new Date(2022, 2, 13, 14, 15, 40, 0).toISOString(),
        messages: [
            {
                userName: users[1].name,
                userPhoto: users[1].photo,
                userId: users[1].userId,
                message: 'hello',
                messageTime: new Date(2022, 2, 13, 14, 15, 40, 0).toISOString(),
            },
            {
                userName: users[1].name,
                userPhoto: users[1].photo,
                userId: users[1].userId,
                message: 'whats up',
                messageTime: new Date(2022, 1, 24, 6, 45, 40, 0).toISOString(),
            },
            {
                userName: authorizedUser.userName,
                userPhoto: authorizedUser.userPhoto,
                userId: authorizedUser.userId,
                message: 'hello',
                messageTime: new Date(2022, 1, 24, 6, 45, 40, 0).toISOString(),
            },
        ],
    },
]