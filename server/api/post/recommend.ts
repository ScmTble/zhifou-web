// 获取推荐动态（Token）
export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const cookie = parseCookies(event)

    const resp: any = await $fetch('/posts', {
        baseURL: useRuntimeConfig().public.apiBase,
        headers: cookie,
        query: {
            offset: query.offset
        }
    })

    let data = resp?.data
    return data?.list ?? null
})
