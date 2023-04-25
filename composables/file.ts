// 文件上传之前
export const beforeUpload = (uploadType: string, fileType: string, fileSize: number) => {
  // 图片类型校验
  if (
    uploadType === 'public/image' &&
    !['image/png', 'image/jpg', 'image/jpeg', 'image/gif'].includes(
      fileType
    )
  ) {
    let msg = '图片仅允许 png/jpg/gif 格式'
    let ok = false
    return {
      msg,
      ok
    }
  }

  if (uploadType === 'image' && fileSize > 10485760) {
    let msg = '图片大小不能超过10MB'
    let ok = false
    return {
      msg,
      ok
    }
  }

  // 视频类型校验
  if (
    uploadType === 'public/video' &&
    !['video/mp4', 'video/quicktime'].includes(fileType)
  ) {
    let msg = '视频仅允许 mp4/mov 格式'
    let ok = false
    return {
      msg,
      ok
    }
  }

  if (
    uploadType === 'public/video' &&
    fileSize > 104857600
  ) {
    let msg = '视频大小不能超过100MB'
    let ok = false
    return {
      msg,
      ok
    }
  }

  // 附件类型校验
  if (
    uploadType === 'attachment' &&
    !['application/zip'].includes(fileType)
  ) {
    let msg = '附件仅允许 zip 格式'
    let ok = false
    return {
      msg,
      ok
    }
  }

  if (uploadType === 'attachment' && fileSize > 104857600) {
    let msg = '附件大小不能超过100MB'
    let ok = false
    return {
      msg,
      ok
    }
  }

  let msg = ''
  let ok = true
  return {
    msg,
    ok
  }
}


export const failUpload = () => {

}


export const removeUpload = () => {

}


// 解析各种附件
export const parseAttachments = (queue: Attachment.AttachmentInfo[]) => {
  let imgs: Attachment.AttachmentInfo[] = []
  let attachments: Attachment.AttachmentInfo[] = []
  let videos: Attachment.AttachmentInfo[] = []
  let links: Attachment.AttachmentInfo[] = []

  if (queue) {
    queue.forEach((attachment: Attachment.AttachmentInfo) => {
      switch (attachment.type) {
        case 'img':
          imgs.push(attachment)
          break
        case 'link':
          links.push(attachment)
          break
        case 'video':
          videos.push(attachment)
          break
        case 'attachment':
          attachments.push(attachment)
          break
      }
    })
  }



  return {
    imgs,
    attachments,
    videos,
    links
  }
}

