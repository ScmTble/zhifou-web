// 根据User获取动态（Token）
export default defineEventHandler(async (event) => {
    const cookie = parseCookies(event)
    const query = getQuery(event)
    const resp: any = await $fetch('/query_user', {
        baseURL: useRuntimeConfig().public.apiBase,
        headers: cookie,
        query: {
            user_id: query.user_id,
            last_id: query.last_id,
            page_num: useRuntimeConfig().public.pageNum
        }
    })

    let data = resp?.data
    return data?.list ?? null
})
