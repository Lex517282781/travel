<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img
            class="item-img"
            :src="item.url"
          />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data() {
    return {
      list: [
        {
          id: 1,
          url:
            'https://imgs.qunarzz.com/vs_ceph_vs_tts/b37e3d7b-7be3-48b5-976d-6ce001f20638.jpg_r_240x160x90_e0a60eff.jpg',
          title:
            '哈尔滨6天5晚跟团游@亚布力激情滑雪+甄选高端酒店+雪乡篝火晚会|24H接送',
          desc: '独特线路满分搭配，高素质导游领队出行无忧'
        },
        {
          id: 2,
          url:
            'https://imgs.qunarzz.com/vs_ceph_vs_tts/b37e3d7b-7be3-48b5-976d-6ce001f20638.jpg_r_240x160x90_e0a60eff.jpg',
          title:
            '哈尔滨6天5晚跟团游@亚布力激情滑雪+甄选高端酒店+雪乡篝火晚会|24H接送',
          desc: '独特线路满分搭配，高素质导游领队出行无忧'
        },
        {
          id: 3,
          url:
            'https://imgs.qunarzz.com/vs_ceph_vs_tts/b37e3d7b-7be3-48b5-976d-6ce001f20638.jpg_r_240x160x90_e0a60eff.jpg',
          title:
            '哈尔滨6天5晚跟团游@亚布力激情滑雪+甄选高端酒店+雪乡篝火晚会|24H接送',
          desc: '独特线路满分搭配，高素质导游领队出行无忧'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/mixins.styl'
.title
  line-height 0.8rem
  background #eee
  text-indent 0.2rem
.item-img-wrapper
  overflow hidden
  height 0
  padding-bottom 37.09%
  .item-img
    width 100%
.item-info
  padding 0.1rem
  .item-title
    line-height 0.54rem
    font-size 0.32rem
    ellipsis()
  .item-desc
    line-height 0.4rem
    color #ccc
    ellipsis()
</style>
