const base_url = import.meta.env.VITE_NUXT_BASE_URL


export const getTags = (type: string, num: number) => {
    return new Promise((resolve, reject) => {
        useFetch(base_url + `/v1/tags?type=${type}&num=${num}`).then(res => {
            // res.data.value.data.topics
            let val = res.data.value as any
            resolve(val.data.topics ?? [])
        }).catch(err => {
            reject(err)
        })
    })
}