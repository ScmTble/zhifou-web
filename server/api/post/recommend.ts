// 获取推荐动态（Token）
export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const cookie = parseCookies(event)

    const data: any = await $fetch('/posts', {
        baseURL: "http://127.0.0.1:8000/v1",
        headers: cookie,
        query: {
            offset: query.offset
        }
    })
    return data.data.list
})
