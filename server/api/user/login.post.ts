// 注册
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const data: any = await $fetch("/auth/login", {
        baseURL: 'http://127.0.0.1:8000/v1',
        method: 'POST',
        body: body
    })
    setCookie(event, 'Authorization', data.data.token)

    return data.data
})
