// 获取推荐动态（Token）
export default defineEventHandler(async (event) => {
    const cookie = parseCookies(event)

    const data: any = await $fetch('/posts', {
        baseURL: "http://127.0.0.1:8000/v1",
        headers: cookie
    })

    return data.data.list
})
