import ua from './ua'

const isAlipay = /alipay/i.test(ua)
const isBrowser = typeof window !== 'undefined'
const isMobile = /mobile/i.test(ua)
const isQQ = /qq/i.test(ua)
const isWechat = /micromessenger/i.test(ua)
const isWeibo = /weibo/i.test(ua)

export default {
  isAlipay,
  isBrowser,
  isMobile,
  isQQ,
  isWechat,
  isWeibo
}
