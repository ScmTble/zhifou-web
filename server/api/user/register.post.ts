// 获取指定Tag详情
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const data: any = await $fetch("/auth/register", {
        baseURL: useRuntimeConfig().apiBase,
        method: 'POST',
        body: body
    })

    return data?.data ?? null
})
