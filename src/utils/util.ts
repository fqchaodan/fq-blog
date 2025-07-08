/*
 * 补充OSS文件前缀
 * */
export const getOssUrl = (url: string) => {
  if (!url) return ''
  if (url.startsWith('http')) return url

  return import.meta.env.VITE_OSS_PREFIX + url
}
