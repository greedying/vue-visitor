const version = require('../package.json').version

import plugins from './plugins'
import { inBrowser } from './browser'

let VueVistor = () => {}

VueVistor.version = version
VueVistor.install = function (Vue) {
  let mount = function (pluginName, plugin) {
    Vue[pluginName] = plugin
    Vue.mixin({
      created: function () {
        this['$' + pluginName] = plugin
      }
    })
  }

  for (let pluginName in plugins) {
    mount(pluginName, plugins[pluginName])
  }
}

if (inBrowser && window.Vue) {
  window.Vue.use(VueVistor)
}

export default VueVistor
