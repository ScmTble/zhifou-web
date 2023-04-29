// 获取用户信息（Token）
export default defineEventHandler(async (event) => {
    const cookie = parseCookies(event)
    const data: any = await $fetch("/user/info", {
        baseURL: 'http://127.0.0.1:8000/v1',
        headers: cookie
    })

    return data.data
})
