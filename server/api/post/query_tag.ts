// 根据tag获取动态（Token）
export default defineEventHandler(async (event) => {
    const cookie = parseCookies(event)
    const query = getQuery(event)
    const resp: any = await $fetch('/pquery', {
        baseURL: "http://127.0.0.1:8000/v1",
        headers: cookie,
        query: query
    })

    let data = resp?.data
    return data?.list ?? null
})
