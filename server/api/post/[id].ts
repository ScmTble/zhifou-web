// 获取指定Post详情
export default defineEventHandler(async (event) => {

    const cookie = parseCookies(event)
    const postId = event.context?.params?.id ?? 0

    const data: any = await $fetch(`/post/${postId}`, {
        baseURL: useRuntimeConfig().public.apiBase,
        headers: cookie
    })

    return data?.data ?? null
})
