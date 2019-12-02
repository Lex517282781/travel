<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="(page, index) of pages"
        :key="index"
      >
        <div
          class="icon"
          v-for="item of page"
          :key="item.id"
        >
          <div class='icon-img'>
            <img
              class='icon-img-content'
              :src='item.url'
            />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data() {
    return {
      swiperOption: {
        autoplay: false
      },
      list: [
        {
          id: '1',
          url: 'https://s.qunarzz.com/homenode/images/touchheader/innBnb.png',
          desc: '民宿'
        },
        {
          id: '2',
          url:
            'https://s.qunarzz.com/homenode/images/touchheader/bargainflight.png',
          desc: '机票'
        },
        {
          id: '3',
          url: 'https://s.qunarzz.com/homenode/images/touchheader/group.png',
          desc: '特惠酒店'
        },
        {
          id: '4',
          url: 'https://s.qunarzz.com/homenode/images/touchheader/haiwai.png',
          desc: '海外酒店'
        },
        {
          id: '5',
          url:
            'https://picbed.qunarzz.com/7804b43ac02cd0333bd0f866eebd43b3.png',
          desc: '一日游'
        },
        {
          id: '6',
          url: 'https://s.qunarzz.com/homenode/images/touchheader/bus.png',
          desc: '汽车票'
        },
        {
          id: '7',
          url: 'https://s.qunarzz.com/homenode/images/touchheader/tuan.png',
          desc: '团购'
        },
        {
          id: '8',
          url:
            'https://s.qunarzz.com/homenode/images/touchheader/freeTravel.png',
          desc: '自由行'
        },
        {
          id: '9',
          url: 'https://s.qunarzz.com/homenode/images/touchheader/car.png',
          desc: '自驾'
        },
        {
          id: '10',
          url:
            'https://s.qunarzz.com/homenode/images/touchheader/aroundtravel.png',
          desc: '周边短途'
        },
        {
          id: '11',
          url: 'https://picbed.qunarzz.com/b8bc00a84142f52d21824d5ebeba29a3.png',
          desc: '信用卡'
        }
      ]
    }
  },
  computed: {
    pages() {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 10)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/varibles.styl'
@import '~@/assets/css/mixins.styl'
.icons >>> .swiper-container
  height 0
  padding-bottom 50%
.icons
  margin-top 0.1rem
  .icon
    position relative
    overflow hidden
    float left
    width 20%
    height 0
    padding-bottom 20%
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom 0.44rem
      box-sizing border-box
      padding 0.2rem
      .icon-img-content
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      height 0.44rem
      line-height 0.44rem
      text-align center
      color $darkTextColor
      ellipsis()
</style>
