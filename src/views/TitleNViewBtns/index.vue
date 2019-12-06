<template>
  <div>
    <button @click="handleShare">原生分享</button>
    <button @click="handleWxShare">微信分享</button>
    <button @click="handleTimeShare">朋友圈分享</button>
    <button @click="handleMiniShare">小程序分享</button>
    <button @click="handleWxAuth">微信授权</button>
    <button @click="handleWxAuthLogout">退出登录</button>
    <button @click="handleGeolocation">定位</button>
    <div style="margin-bottom: 50px;">
      <p>地址：{{address}}</p>
      <p>经度：{{lon}}</p>
      <p>纬度：{{lat}}</p>
    </div>
    <button @click="handlePay">支付</button>
  </div>
</template>

<script>
export default {
  name: 'titlenviewbtns',
  data: function() {
    return {
      auths: null,
      address: '',
      lon: '',
      lat: ''
    }
  },
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
              id: 'gh_7c7d8fd93ca4', // gh_33446d7f7a26
              path: '/pages/home/index', // /pages/component/component
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
    },
    handleWxAuth() {
      const { isClient } = this.$store.state
      if (isClient) {
        const _this = this
        window.plus.oauth.getServices(
          function(services) {
            _this.auths = services[0]
            _this.authLogin(services[0])
          },
          function(e) {
            alert('获取分享服务列表失败：' + e.message + ' - ' + e.code)
          }
        )
      }
    },
    authLogin(s) {
      if (!s.authResult) {
        const _this = this
        s.login(
          function(e) {
            // 获取登录操作结果
            var result = e.target.authResult
            alert('登录认证成功：' + JSON.stringify(result))
            _this.authUserInfo()
          },
          function(e) {
            alert('登录认证失败！')
          },
          {}
        )
      }
    },
    authUserInfo(s) {
      if (!s.authResult) {
        alert('未登录授权！')
      } else {
        s.getUserInfo(
          function(e) {
            alert('获取用户信息成功：' + JSON.stringify(s.userInfo))

            // 拿到用户信息，进行相关处理，ajax传用户数据到服务器等
            var prame = JSON.stringify(s.userInfo)
            console.log(prame)
          },
          function(e) {
            alert('获取用户信息失败：' + e.message + ' - ' + e.code)
          }
        )
      }
    },
    handleWxAuthLogout() {
      if (!this.auths) return
      for (var i in this.auths) {
        var s = this.auths[i]
        if (s.authResult) {
          s.logout(
            function(e) {
              alert('注销登录认证成功！')
            },
            function(e) {
              alert('注销登录认证失败1！')
            }
          )
        }
      }
    },
    handleGeolocation() {
      const { isClient } = this.$store.state
      const _this = this
      if (isClient) {
        navigator.geolocation.getCurrentPosition(
          function(p) {
            _this.address = p.addresses
            _this.lon = p.coords.longitude
            _this.lat = p.coords.latitude
          },
          function(err) {
            console.log(err.message)
          }
        )
      }
    },
    handlePay() {
      console.log(1)
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
