<template>
  <div>
    <button @click="handleShare">原生分享</button>
    <button @click="handleWxShare">微信分享</button>
    <button @click="handleTimeShare">朋友圈分享</button>
    <button @click="handleMiniShare">小程序分享</button>
  </div>
</template>

<script>
export default {
  name: 'titlenviewbtns',
  methods: {
    handleShare() {
      const { isClient } = this.$store.state
      if (isClient) {
        window.plusShare(
          {
            title: document.title, // 标题
            content: '原生分享', // 分享内容或者应用描述
            href: location.href, // 分享出去后，点击跳转的地址
            thumbs: [
              'http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo5hd9ovRGbib6TYibI1TpRNEqWjW3VmZ5Kv0FCOwAXibXeqiauFF80Jcg53oYr3bUzwyYrYjZ7Ogu8ibQ/132'
            ] // 分享缩略图
          },
          function(result) {
            // 分享回调函数
            if (result) {
              window.plus.nativeUI.toast('分享成功')
            } else {
              window.plus.nativeUI.toast('分享失败')
            }
          }
        )
      } else {
        alert('当前环境下暂不支持分享')
      }
    },
    handleWxShare() {
      const { isClient } = this.$store.state
      if (isClient) {
        window.wxShare(
          {
            title: document.title, // 标题
            content: '微信分享', // 分享内容或者应用描述
            href: location.href, // 分享出去后，点击跳转的地址
            thumbs: [
              'http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo5hd9ovRGbib6TYibI1TpRNEqWjW3VmZ5Kv0FCOwAXibXeqiauFF80Jcg53oYr3bUzwyYrYjZ7Ogu8ibQ/132'
            ] // 分享缩略图
          },
          function(result) {
            // 分享回调函数
            if (result) {
              window.plus.nativeUI.toast('分享成功')
            } else {
              window.plus.nativeUI.toast('分享失败')
            }
          }
        )
      }
    },
    handleTimeShare() {
      const { isClient } = this.$store.state
      if (isClient) {
        window.timeShare(
          {
            title: document.title, // 标题
            content: '朋友圈分享', // 分享内容或者应用描述
            href: location.href, // 分享出去后，点击跳转的地址
            thumbs: [
              'http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo5hd9ovRGbib6TYibI1TpRNEqWjW3VmZ5Kv0FCOwAXibXeqiauFF80Jcg53oYr3bUzwyYrYjZ7Ogu8ibQ/132'
            ] // 分享缩略图
          },
          function(result) {
            // 分享回调函数
            if (result) {
              window.plus.nativeUI.toast('分享成功')
            } else {
              window.plus.nativeUI.toast('分享失败')
            }
          }
        )
      }
    },
    handleMiniShare() {
      const { isClient } = this.$store.state
      if (isClient) {
        window.miniShare(
          {
            type: 'miniProgram',
            title: document.title, // 标题
            content: '朋友圈分享', // 分享内容或者应用描述
            href: location.href, // 分享出去后，点击跳转的地址
            thumbs: [
              'http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo5hd9ovRGbib6TYibI1TpRNEqWjW3VmZ5Kv0FCOwAXibXeqiauFF80Jcg53oYr3bUzwyYrYjZ7Ogu8ibQ/132'
            ], // 分享缩略图
            miniProgram: {
              id: 'gh_33446d7f7a26', // gh_33446d7f7a26
              path: '/pages/component/component', // /pages/component/component
              webUrl: 'http://uniapp.dcloud.io',
              type: 0
            }
          },
          function(result) {
            // 分享回调函数
            if (result) {
              window.plus.nativeUI.toast('分享成功')
            } else {
              window.plus.nativeUI.toast('分享失败')
            }
          }
        )
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
div
  text-align: center
  button
    display: block
    margin: 50px auto
    width: 50%
    height: 60px
</style>
