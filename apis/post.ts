const base_url = import.meta.env.VITE_NUXT_BASE_URL


export const getHotTags = () => {
    return new Promise((resolve, reject) => {
        useFetch(base_url + '/v1/tags?type=hot&num=12').then(res => {
            // res.data.value.data.topics
            let val = res.data.value as any
            resolve(val.data.topics ?? [])
        }).catch(err => {
            reject(err)
        })
    })
}