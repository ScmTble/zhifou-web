// 获取tag列表（不需要cookie）
export default defineEventHandler(async (event) => {
    const resp: any = await $fetch('/tags?type=hot&num=50', {
        baseURL: useRuntimeConfig().public.apiBase
    })

    let data = resp?.data
    return data?.topics ?? null
})
