declare module Post {

    interface PostInfo {
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
        /** 修改时间 */
        modified_time?: number,
        /** 删除时间 */
        deleted_time?: number,
        /** 点赞数 */
        upvote_count: number,
        /** 评论数 */
        comment_count: number,
        /** 收藏数 */
        collection_count: number,
        /** 是否删除：0为未删除，1为已删除 */
        is_del?: 0 | 1
    }
}