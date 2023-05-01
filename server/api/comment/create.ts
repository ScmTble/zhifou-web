// 发布评论（Token）
export default defineEventHandler(async (event) => {
    const cookie = parseCookies(event)
    const body = await readBody(event)
    const data: any = await $fetch("/comment", {
        baseURL: useRuntimeConfig().apiBase,
        method: 'POST',
        body: body,
        headers: cookie
    })
    return data?.data ?? null
})
