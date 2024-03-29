// 获取推荐动态（Token）
export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const cookie = parseCookies(event)

    const resp: any = await $fetch('/posts', {
        baseURL: useRuntimeConfig().public.apiBase,
        headers: cookie,
        query: {
            last_id: query.last_id,
            page_num: useRuntimeConfig().public.pageNum
        }
    })

    let data = resp?.data
    return data?.list ?? null
})
