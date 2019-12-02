<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './subs/Banner'
import DetailHeader from './subs/Header'
import DetailList from './subs/List'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      list: []
    }
  }
}
</script>

<style lang="stylus" scoped></style>
