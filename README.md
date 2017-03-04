# vue-visitor

## vue-visitor是什么

`vue-visitor`是一个`Vue`插件，封装了用户的一些信息，例如设备，浏览器等

## 使用方法

### umd包方式

   一般引入min版本，即引入`tctip-版本号.min.js`文件  

```javascript
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <script type="text/javascript" src="../dist/vueVisitor-0.0.1.min.js"></script>
  <script>
    // 使用，例如
    // alert(Vue.device.os)
    // alert(Vue.browser.isWechat)
    // 或者 this.$device.os,  this.$browser.isWechat
  </script>
```

### webpack 方式使用 

#### 第一步，安装

```javascript
  npm install vue-visitor --save
```

#### 第二步，引入包，并导入包

```javascript
  import vueVisitor from 'vue-visitor'
  Vue.use(vueVisitor)
```
#### 第三步，使用，列斯umd格式

```javascript
    // 使用，例如
    // alert(Vue.device.os)
    // alert(Vue.browser.isWechat)
    // 或者 this.$device.os
    // this.$browser.isWechat
```


## 属性说明

如果没有特别说明，则属性`example`使用方式为 `Vue.example`，组件中则为`this.$examle`

* browser
  
浏览器环境，例如浏览器版本号，是否软件内置浏览器，还在不断实现中

### 子属性说明

  * `inBrowser`
    * `类型`: Boolean
    * `含义`: 是否浏览器环境
    * `备注`: 无
  * `isWechat`
    * `类型`: Boolean
    * `含义`: 是否微信内置浏览器
    * `备注`: 无
  * `isWeibo`
    * `类型`: Boolean
    * `含义`: 是否微博客户端内置浏览器
    * `备注`: 无

* device属性
  
设备属性，比如是android还是ios
  
#### 子属性说明

  * `os`
    * `类型`: String
    * `含义`: 操作系统
    * `备注`: 返回, 'ios', 'android' 或者 'other'
  * `isAndroid`
    * `类型`: Boolean
    * `含义`: 是否安卓系统
    * `备注`: 无
  * `isIos`
    * `类型`: Boolean
    * `含义`: 是否Ios系统
    * `备注`: 无
  * `isIpad`
    * `类型`: Boolean
    * `含义`: 是否IPad
    * `备注`: 无
  * `isIpod`
    * `类型`: Boolean
    * `含义`: 是否Ipod
    * `备注`: 无
  * `isIphone`
    * `类型`: Boolean
    * `含义`: 是否Iphone
    * `备注`: 无


## 改进与完善

本插件只是初步实现，还很不完善
欢迎做出您的贡献

+ 您可以提出issue，我会尽量快速回应，包括bug和建议
+ 您也可以PR，非常欢迎，但尽量但并不保证merge
+ 欢迎加qq群讨论：617600089
