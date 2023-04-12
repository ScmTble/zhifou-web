declare module NetParams {

    interface AuthUserLogin {
        /** 用户名 */
        username: string,
        /** 密码 */
        password: string
    }

    interface AuthUserRegister {
        /** 用户名 */
        username: string,
        /** 密码 */
        password: string
    }

    type AuthUserInfo = string

    interface AuthUpdateUserPassword {
        /** 新密码 */
        password: string,
        /** 旧密码 */
        old_password: string
    }

    interface UserGetCollections {
        page: number,
        page_size: number
    }

    interface UserPrecheckAttachment {
        id: number
    }

    interface UserGetAttachment {
        id: number
    }

    interface UserGetUnreadMsgCount {

    }

    interface UserGetMessages {
        page: number,
        page_size: number
    }

    interface UserGetUserPosts {
        /** 用户名 */
        username: string,
        page: number,
        page_size: number
    }

    interface UserGetStars {
        page: number,
        page_size: number
    }

    interface UserGetUserProfile {
        username: string
    }

    interface UserGetBills {
        page: number,
        page_size: number
    }

    interface UserStatusReq {
        id: number,
        status: number
    }

    interface UserReqRecharge {
        amount: number
    }

    interface UserGetRecharge {
        id: number
    }

    interface UserBindUserPhone {
        phone: string,
        captcha: string
    }

    interface UserGetCaptcha {

    }

    interface UserWhisper {
        user_id: number,
        content: string
    }

    interface UserChangePassword {
        /** 新密码 */
        password: string,
        /** 旧密码 */
        old_password: string
    }

    interface UserChangeNickname {
        /** 昵称 */
        nickname: string
    }

    interface PostGetPost {
        id: number
    }

    interface PostGetPosts {
        query: string | null,
        type: string,
        page: number,
        page_size: number
    }

    interface PostLockPost {
        id: number
    }

    interface PostStickPost {
        id: number
    }

    interface PostVisibilityPost {
        id: number,
        /** 可见性：0为公开，1为私密，2为好友可见 */
        visibility: import('@/utils/IEnum').VisibilityEnum
    }

    interface PostGetPostStar {
        id: number
    }

    interface PostPostStar {
        id: number
    }

    interface PostGetPostCollection {
        id: number
    }

    interface PostPostCollection {
        id: number
    }

    interface PostGetTags {
        type: 'hot' | 'new',
        num: number
    }

    interface PostGetPostComments {
        id: number
    }

    interface PostCreatePost {
        /** 帖子内容列表 */
        contents: string,
        /** 标签列表 */
        tags: string[],
        /** 艾特用户列表 */
        users: {
            nickname: string;
            username: string;
        }[],
        // 图片
        imgs: {
            label: string;
            url: string;
        }[],
        // urls
        urls: string[],
        // videos
        videos: {
            label: string;
            url: string;
        }[],
        // 附件
        attachments: {
            label: string;
            url: string;
        }[],
    }

    interface PostDeletePost {
        id: number
    }

    interface PostCreateComment {
        /** 内容ID */
        post_id: number,
        /** 帖子内容列表 */
        contents: Partial<Item.CommentItemProps>[],
        /** 艾特用户列表 */
        users: string[]
    }

    interface PostDeleteComment {
        id: number
    }

    interface PostCreateCommentReply {
        /** 艾特的用户UID */
        at_user_id: number,
        /** 回复的评论ID */
        comment_id: number,
        /** 回复内容 */
        content: string
    }

    interface PostDeleteCommentReply {
        id: number
    }

}
