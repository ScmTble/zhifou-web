const base_url = import.meta.env.VITE_NUXT_BASE_URL as string

// 获取评论
export const getAllComments = (postId: number) => {
  return new Promise((resolve, reject) => {
    useFetch(base_url + `/v1/comments/${postId}`).then((res) => {
      let val = res.data.value as any
      if (val.code != 0) {
        reject(val)
      } else {
        resolve(val.data.comments)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

// 发布评论
export const insertComment = (data: NetParams.PostCreateComment) => {
  return request({
    method: 'post',
    url: '/v1/comment',
    data
  });
}