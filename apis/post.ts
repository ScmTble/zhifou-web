const base_url = import.meta.env.VITE_NUXT_BASE_URL as string

/** 发布动态 */
export const createPost = (data: NetParams.PostCreatePost): Promise<NetReq.PostCreatePost> => {
  return request({
    method: 'post',
    url: '/v1/post',
    data
  });
};

// 获取推荐动态
export const getRecommend = () => {
  return request({
    method: 'get',
    url: '/v1/posts',
  })
}


export const getTags = (type: string, num: number) => {
  return new Promise((resolve, reject) => {
    useFetch(base_url + `/v1/tags?type=${type}&num=${num}`).then(res => {
      let data = (res.data.value as any).data as any
      resolve(data.topics ?? [])
    }).catch(err => {
      reject(err)
    })
  })
}

// 获取所有tag
export const getAllTags = () => {
  return new Promise((resolve, reject) => {
    useFetch(base_url + `/v1/tags?type=hot&num=50`).then(res => {
      // res.data.value.data.topics
      let val = res.data.value as any
      let result = []
      if (val.data.topics) {
        result = val.data.topics.map((item: any) => {
          return {
            label: item.tag,
            value: item.id
          }
        })
      }
      resolve(result)
    }).catch(err => {
      reject(err)
    })
  })
}

// 获取指定动态
export const getDynamicDetail = (id: string) => {
  return new Promise((resolve, reject) => {
    useFetch(base_url + `/v1/post/${id}`).then(res => {
      let val = res.data.value as any
      resolve(val.data ?? {})
    }).catch(err => {
      reject(err)
    })
  })
}