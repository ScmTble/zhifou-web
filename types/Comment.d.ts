declare module Comment {

    interface CommentInfo {
        /** 评论Id */
        id: string,
        /** 动态Id */
        post_id: string,
        /** 用户 */
        user: User.UserInfo,
        /** 内容 */
        content: string,

        created_time: number,
        updated_time?: number,
        deleted_time?: number,
    }
}