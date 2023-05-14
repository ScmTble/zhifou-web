// 获取用户基本信息
export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    const data: any = await $fetch("/user", {
        baseURL: useRuntimeConfig().public.apiBase,
        query
    })

    return data?.data ?? null
})
