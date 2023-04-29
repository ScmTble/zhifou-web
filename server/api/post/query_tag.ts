// 获取推荐动态（Token）
export default defineEventHandler(async (event) => {
    const cookie = parseCookies(event)
    const query = getQuery(event)
    const data: any = await $fetch('/pquery', {
        baseURL: "http://127.0.0.1:8000/v1",
        headers: cookie,
        query: query
    })

    return data.data.list
})
