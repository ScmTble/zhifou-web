// 获取指定Tag详情
export default defineEventHandler(async (event) => {
    const postId = event.context?.params?.id ?? 0
    const data: any = await $fetch(`/tag/${postId}`, {
        baseURL: useRuntimeConfig().public.apiBase,
    })

    return data?.data ?? null
})
