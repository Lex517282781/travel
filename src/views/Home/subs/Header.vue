<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe743;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe7b3;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont arrow-icon">&#xe7b2;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/varibles.styl'
.header
  display flex
  line-height $headerHeight
  background $bgColor
  color #fff
  .header-left
    width 0.64rem
    float left
    .back-icon
      display inline-block
      margin-left 0.2rem
      text-align center
      font-size 0.36rem
  .header-input
    flex 1
    height 0.64rem
    line-height 0.64rem
    margin-top 0.12rem
    margin-left 0.2rem
    padding-left 0.2rem
    background #fff
    border-radius 0.1rem
    color #ccc
  .header-right
    min-width 1.04rem
    padding 0 0.1rem
    float right
    text-align center
    color #fff
    .arrow-icon
      margin-left -0.04rem
      font-size 0.36rem
</style>
