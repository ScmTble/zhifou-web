// 获取指定Tag详情
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const data: any = await $fetch("/auth/register", {
        baseURL: 'http://127.0.0.1:8000/v1',
        method: 'POST',
        body: body
    })

    return data?.data ?? null
})
