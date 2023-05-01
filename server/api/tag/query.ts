// 获取tag列表（不需要cookie）
export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    const resp: any = await $fetch(`/tags?type=${query.type}&num=${query.num}`, {
        baseURL: "http://127.0.0.1:8000/v1"
    })
    let data = resp?.data

    return data?.topics ?? null
})
