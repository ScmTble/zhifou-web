// 根据tag获取动态（Token）
export default defineEventHandler(async (event) => {
    const cookie = parseCookies(event)
    const query = getQuery(event)
    const resp: any = await $fetch('/query_tag', {
        baseURL: useRuntimeConfig().public.apiBase,
        headers: cookie,
        query: {
            tag_id: query.tag_id,
            last_id: query.last_id,
            page_num: useRuntimeConfig().public.pageNum
        }
    })

    let data = resp?.data
    return data?.list ?? null
})
