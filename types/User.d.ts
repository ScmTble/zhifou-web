declare module User {

    interface UserInfo {
        /** 用户UID */
        id: string,
        /** 用户名 */
        username: string,
        /** 用户昵称 */
        nickname: string,
        /** 用户头像 */
        avatar: string,
        /** 是否为管理员 */
        is_admin: boolean,
    }
}