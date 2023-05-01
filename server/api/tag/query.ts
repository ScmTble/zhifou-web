// 获取tag列表（不需要cookie）
export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    const resp: any = await $fetch(`/tags?type=${query.type}&num=${query.num}`, {
        baseURL: useRuntimeConfig().apiBase
    })
    let data = resp?.data

    return data?.topics ?? null
})
