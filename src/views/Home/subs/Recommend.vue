<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <img
          class="item-img"
          :src="item.url"
        />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      list: [
        {
          id: 1,
          url:
            'https://img1.qunarzz.com/vs_ceph_vs_tts/82b6a278-a9a8-495c-a56d-c9545d5cb526.jpg_r_240x160x90_170d6c45.jpg',
          title:
            '哈尔滨6天5晚跟团游@亚布力激情滑雪+甄选高端酒店+雪乡篝火晚会|24H接送',
          desc: '独特线路满分搭配，高素质导游领队出行无忧'
        },
        {
          id: 2,
          url:
            'https://img1.qunarzz.com/vs_ceph_vs_tts/82b6a278-a9a8-495c-a56d-c9545d5cb526.jpg_r_240x160x90_170d6c45.jpg',
          title:
            '哈尔滨6天5晚跟团游@亚布力激情滑雪+甄选高端酒店+雪乡篝火晚会|24H接送',
          desc: '独特线路满分搭配，高素质导游领队出行无忧'
        },
        {
          id: 3,
          url:
            'https://img1.qunarzz.com/vs_ceph_vs_tts/82b6a278-a9a8-495c-a56d-c9545d5cb526.jpg_r_240x160x90_170d6c45.jpg',
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
  margin-top 0.2rem
  line-height 0.8rem
  background #eee
  text-indent 0.2rem
.item
  overflow hidden
  display flex
  height 1.9rem
  .item-img
    width 1.7rem
    height 1.7rem
    padding 0.1rem
  .item-info
    flex 1
    padding 0.1rem
    min-width 0
    .item-title
      line-height 0.54rem
      font-size 0.32rem
      ellipsis()
    .item-desc
      line-height 0.4rem
      color #ccc
      ellipsis()
    .item-button
      line-height 0.44rem
      margin-top 0.16rem
      background #ff9300
      padding 0 0.2rem
      border-radius 0.06rem
      color #fff
</style>
