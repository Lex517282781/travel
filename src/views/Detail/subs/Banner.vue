<template>
  <div>
    <div
      class="banner"
      @click="handleBannerClick"
    >
      <img
        class="banner-img"
        src="https://img1.qunarzz.com/vs_ceph_vs_tts/046e826a-0ae6-4f40-8c2d-3747bdbfef2f.jpg_r_640x420x90_fd0f94d0.jpg"
      />
      <div class="banner-info">
        <div class="banner-tittle">
          杭州出发-跟团游
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe632;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallary>
  </div>

</template>

<script>
import CommonGallary from '@/components/Gallary'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true
    },
    handleGallaryClose() {
      this.showGallary = false
    }
  },
  data() {
    return {
      imgs: [
        'https://img1.qunarzz.com/vs_ceph_vs_tts/046e826a-0ae6-4f40-8c2d-3747bdbfef2f.jpg_r_640x420x90_fd0f94d0.jpg'
      ],
      showGallary: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height 0.6rem
    color #fff
    background-image linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))
    .banner-tittle
      flex 1
      font-size 0.32rem
      padding 0 0.2rem
    .banner-number
      height 0.32rem
      line-height 0.32rem
      margin-top 0.14rem
      padding 0 0.4rem
      border-radius 0.2rem
      background rgba(0, 0, 0, 0.8)
      font-size 0.24rem
      .banner-icon
        font-size 0.24rem
</style>
