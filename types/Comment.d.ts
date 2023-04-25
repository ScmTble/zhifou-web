declare module Comment {

    interface CommentInfo {
        /** 评论Id */
        id: number,
        /** 动态Id */
        post_id: number,
        /** 用户 */
        user: User.UserInfo,
        /** 内容 */
        content: string,
        /** 用户手机号 */
        created_time: number,
        updated_time?: number,
        deleted_time?: number,
    }
}