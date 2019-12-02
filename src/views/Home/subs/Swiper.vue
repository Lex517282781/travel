<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="item of swiperList"
        :key="item.id"
      >
        <img
          class="swiper-img"
          :src="item.url"
          alt="img"
        >
      </swiper-slide>
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '1',
          url:
            'https://imgs.qunarzz.com/vc/de/3d/1c/2ea7755853fef62ce549153026.jpg_92.jpg'
        },
        {
          id: '2',
          url:
            'https://imgs.qunarzz.com/vc/aa/9e/82/14bf523635542806a671763e98.jpg_92.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #fff
.wrapper
  width 100%
  height 0
  overflow hidden
  padding-bottom 30.4761%
  background #eee
  .swiper-img
    width 100%
</style>
