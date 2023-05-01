// 获取用户信息（Token）
export default defineEventHandler(async (event) => {
    const cookie = parseCookies(event)
    const data: any = await $fetch("/user/info", {
        baseURL: useRuntimeConfig().apiBase,
        headers: cookie
    })
    return data?.data ?? null
})
