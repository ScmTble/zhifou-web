// 获取tag列表（不需要cookie）
export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    const data: any = await $fetch(`/tags?type=${query.type}&num=${query.num}`, {
        baseURL: "http://127.0.0.1:8000/v1"
    })

    return data.data.topics
})
