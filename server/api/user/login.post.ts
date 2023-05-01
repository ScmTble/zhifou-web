// 注册
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const data: any = await $fetch("/auth/login", {
        baseURL: useRuntimeConfig().apiBase,
        method: 'POST',
        body: body
    })
    setCookie(event, 'Authorization', data.data.token, {
        maxAge: 86400
    })

    return data?.data ?? null
})
