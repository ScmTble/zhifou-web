// 获取指定动态的全部评论
export default defineEventHandler(async (event) => {
    const cookie = parseCookies(event)
    const postId = event.context?.params?.id ?? 0
    const resp: any = await $fetch(`/comments/${postId}`, {
        baseURL: "http://127.0.0.1:8000/v1",
        headers: cookie
    })

    let data = resp?.data
    return data?.comments ?? null
})
