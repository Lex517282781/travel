# travel

## 项目开发进程

- 项目初始化

reset.css 解决不同浏览器样式的差异
border.css 解决移动端 1 像素边框的问题
fastclick 解决移动端 300 毫秒的延时问题

- 样式变量抽出

变量的定义 如 在 varibles.styl 文件中 声明变量 $val = 1px
变量的使用 先导入变量 @import '~@/assets/css/varibles.styl' 再使用 如 width $val

- iconfont 使用

  3.1 https://www.iconfont.cn/
  3.2 个人项目管理建立对于该开发项目的图标库
  3.3 icon 市场选出需要的图标 加入购物车
  3.4 将购物车的图标加入对应开发项目
  3.5 讲开发项目的图标下载至本地
  3.6 解压只要获取 icon 字体和字体 css 根据项目目录更改字体 css 的对应路径
  3.7 在 main.js 引入字体 css
  3.8 如何使用: 在需要的元素标签加入 iconfont 类 然后在 icon 字体市场找出自己项目对应的字体 code 如 `<span class="iconfont">&#xe7b3;</span>`

- 各页面开发

  - home-page

    - header
    - swiper
      使用外部组件 `vue-awesome-swiper`
      涉及组件内部样式更改
      因为使用组件作用域的问题 需要使用样式穿透不限作用域方式修改样式 如 `.wrapper >>> .swiper-pagination-bullet-active`
    - list

  - city-page

    - header
    - search
    - list
    - alphabet
      滚动的时候需要阻止默认事件 否则容易和页面的滚动事件影响

  - detail-page

    - banner
      扩展了图片画廊组件 `Gallary`
    - header
      头部导航组件
      注意：全局绑定的事件在页面卸载之前需要解绑
    - list
      递归组件的使用
    - 详情的获取 因为 keeplive 的作用 mounted 第二次进去就不会调用 所以需要在 keeplive 把 Detail 即不需要缓存的组件排除在外
    - 扩展知识: 组件中 name 的作用 1 递归组件时候需要声明 name 值 2 在 keeplive 排除不需要缓存的组件时候需要用到 name 的值 3 在开发工具调试的时候 显示各组件的名字
    - 页面跳转的时候会受上一个页面滚动的影响 可以在 routers 上加上 scrollBehavior 配置
    - 组件动画的使用

- 调试

  - vconsole 安装

- wap2app 打包

  - wap2app 教程[https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/13425]
  - 路由改造 主要在配置文件 `sitemap.json` 修改 如:
    ```json
    {
      "pages": [
        {
          "webviewId": "__W2A__192.168.31.158", //首页
          "matchUrls": [
            {
              "href": "http://192.168.31.158:8080"
            },
            {
              "href": "http://192.168.31.158:8080/"
            }
          ],
          "webviewParameter": {
            "titleNView": false,
            "statusbar": {
              //状态条背景色，
              //首页不使用原生导航条，颜色值建议和global->webviewParameter->titleNView->backgroundColor颜色值保持一致
              //若首页启用了原生导航条，则建议将首页的statusbar配置为false，这样状态条可以和原生导航条背景色保持一致；
              "background": "#f7f7f7"
            }
          }
        },
        {
          "webviewId": "detail", //详情
          "matchUrls": [
            {
              "pathname": "WILDCARD:/detail/*" // 通配符匹配
            }
          ],
          "webviewParameter": {
            "titleNView": {
              "titleText": "景点详情",
              "type": "transparent"
            }
          }
        }
      ]
    }
    ```
  - 判断UA的不同 实现不同的路由跳转方式

  - app自定义配置真机调试如何生效

    配置参数需要提交云端打包后才能生效，如果需要真机运行生效请使用[自定义基座][https://ask.dcloud.net.cn/article/35115]

  - vue-cli https 开启：在vue.config.js中设置devServer的https为true

## 问题

1. VSCode 中格式化 vue 文件时，js 代码会被自动添加上分号，单引号转为双引号

打开 vscode 中设置 vetur 追加以下内容

```json
{
  "vetur.format.defaultFormatterOptions": {
    "prettier": {
      "semi": false,
      "singleQuote": true
    }
  }
}
```

2. vscode 中自动格式化 stylus 设置 会自动添加括号和分号的问题

打开 vscode 中设置 vetur 追加以下内容

```json
{
  "stylusSupremacy.insertColo‘ns": false, // 是否插入冒号
  "stylusSupremacy.insertSemicolons": false, // 是否插入分好
  "stylusSupremacy.insertBraces": false, // 是否插入大括号
  "stylusSupremacy.insertNewLineAroundImports": false, // import之后是否换行
  "stylusSupremacy.insertNewLineAroundBlocks": false // 两个选择器中是否换行
}
```

在根目录创建.prettierrc 文件，在文件中加入如下代码：

```json
{
  "semi": false,
  "singleQuote": true
}
```

## todo

1. 微信登录

2. 分享 朋友 朋友圈 保存图片

3. 定位

4. 支付 微信

5. 百度地图用h5 或者 打开原生app
