declare module Post {

    interface PostInfo {
        /** 动态Id */
        id: string,
        /** 发帖人用户数据 */
        user: User.UserInfo,
        /** 内容列表 */
        contents: string,
        /** 标签列表 */
        tags: Tag.TagInfo[],
        /** 附件列表 */
        attachments: Attachment.AttachmentInfo[],
        /** 创建时间 */
        created_time: number,
        /** 点赞数 */
        upvote_count: number,
        /** 评论数 */
        comment_count: number,
        /** 收藏数 */
        collection_count: number,
        // 收藏状态
        collect_status: boolean,
        // 点赞状态
        upvote_status: boolean,
    }
}