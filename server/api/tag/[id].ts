// 获取指定Tag详情
export default defineEventHandler(async (event) => {
    const postId = event.context?.params?.id ?? 0
    const data: any = await $fetch(`/tag/${postId}`, {
        baseURL: "http://127.0.0.1:8000/v1",
    })

    return data?.data ?? null
})
