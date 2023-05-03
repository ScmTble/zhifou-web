// 获取收藏的全部动态（Cookie）
export default defineEventHandler(async (event) => {
    const cookie = parseCookies(event)
    const query = getQuery(event)

    const resp: any = await $fetch(`/collect`, {
        baseURL: useRuntimeConfig().apiBase,
        query,
        headers: cookie
    })
    let data = resp?.data

    return data?.list ?? null
})
