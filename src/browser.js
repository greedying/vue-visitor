const ua = navigator.userAgent

const inBrowser = typeof window !== 'undefined'
const isWechat = /micromessenger/i.test(ua)
const isWeibo = /weibo/i.test(ua)

export default {
  inBrowser,
  isWechat,
  isWeibo
}
