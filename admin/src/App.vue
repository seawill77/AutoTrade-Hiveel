<template>
  <div class="f-c" style="height: 100%;">
    <el-container v-if="me.auth" style="height: 100%;">
      <el-aside :width="asiderWidth" style="transition-duration: 0.5s;"><asider @widthChange="changeAsiderWidth"/></el-aside>
      <el-container>
        <el-header style="padding: 0;"><at-header /></el-header>
        <el-main style="padding: 0; background: #F6F7F7;"><router-view/></el-main>
      </el-container>
    </el-container>
    <login/>
    <failBox/>
  </div>
</template>
<script>
import asider from '@/component/nav/asider'
import atHeader from '@/component/nav/atHeader'
import login from '@/component/login'
import failBox from '@/component/failBox'
export default {
  name: 'App',
  components: {
    asider, atHeader, login, failBox,
  },
  data() {
    return {
      asiderWidth: document.documentElement.clientWidth < 961 && document.documentElement.clientWidth > 768 ? '64px' : document.documentElement.clientWidth <= 768 ? '0' : '250px',
    }
  },
  computed: {
    me() { return this.$store.state.me },
  },
  methods: {
    changeAsiderWidth(v) {
      this.asiderWidth = v
    },
  },
}
</script>
<style>
</style>
