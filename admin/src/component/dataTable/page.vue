<template>
  <div class="df df-jcfe df-aic df-wrap">
    <div>
      <button class="center btn-white-grey" style="margin: 0 5px; width: 30px; height: 30px;" v-if="page.curr-1>0" @click="goPage(page.curr-1)"><i class='el-icon-arrow-left'></i></button>
    </div>
    <div v-for="i in 4" :key="'p'+(page.curr-i)">
      <button class="center btn-white-grey" style="margin: 0 5px; width: 30px; height: 30px;" v-if="page.curr-5+i>0" @click="goPage(page.curr-5+i)">{{page.curr-5+i}}</button>
    </div>
    <div>
      <button class="center btn-blue" style="margin: 0 5px; width: 30px; height: 30px;">{{page.curr}}</button>
    </div>
    <div v-for="i in 4" :key="'p'+(page.curr+i)">
      <button class="center btn-white-grey" style="margin: 0 5px; width: 30px; height: 30px;" v-if="page.curr+i<=page.max" @click="goPage(page.curr+i)">{{page.curr+i}}</button>
    </div>
    <div>
      <button class="center btn-white-grey" style="margin: 0 5px; width: 30px; height: 30px;" v-if="page.curr+1<=page.max" @click="goPage(page.curr+1)"><i class='el-icon-arrow-right'></i></button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['page', 'goPage'],
  data() {
    return {
    }
  },
  computed: {
  },
}
</script>
<style scoped>
</style>
