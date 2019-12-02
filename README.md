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
