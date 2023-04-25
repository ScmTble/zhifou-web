import { defineStore } from 'pinia'

const useCache = defineStore('cache', {

    state: () => {
        const tmpCommentList: Comment.CommentInfo[] = [];
        const tmpDynamicList: Post.PostInfo[] = [];
        return {
            tmpCommentList,
            tmpDynamicList
        }
    },
    actions: {
        addComment(comment: Comment.CommentInfo) {
            this.tmpCommentList.push(comment)
        },
        addPost(post: Post.PostInfo) {
            this.tmpDynamicList.push(post);
        }
    },
})

export default useCache
