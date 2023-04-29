// 获取tag列表（不需要cookie）
export default defineEventHandler(async (event) => {
    const data: any = await $fetch('/tags?type=hot&num=50', {
        baseURL: "http://127.0.0.1:8000/v1"
    })

    return data.data.topics
})
