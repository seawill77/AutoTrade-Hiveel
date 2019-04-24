<template>
  <header class="df df-jcsa bg-white" style="width: 100%; height: 59px; border-bottom: 1px solid #d3d9db;">
    <div class="df df-jcsb df-aic" style="margin: 0 20px; width: 100%;">
      <el-dropdown class="pointer hamburger" size="large">
        <span class="el-dropdown-link">
          <i class="el-icon-menu"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-autocomplete v-model="filter.name" placeholder="Search Vehicles" prefix-icon="el-icon-search" style="width: 36%; max-width: 450px; min-width: 200px;"></el-autocomplete>
      <div class="df">
        <div style="width: 28px; height: 28px; border-radius: 50%;">
          <img style="width: 28px; height: 28px;" src="@/assets/img/notification.png" alt="">
        </div>
        <el-dropdown style="margin-left: 30px;">
          <centerImage style="width: 28px; height: 28px;" :src="me.imgsrc"/>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><span @click="logout">Log out</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script>
import centerImage from '@/component/image/centerImage'
export default {
  components: { centerImage },
  computed: {
    auth() { return this.$store.state.me.auth },
    me() { return this.$store.state.me.user },
    filter() { return this.$store.state.vehicle.filter },
  },
  mounted() {
  },
  methods: {
    logout() {
      this.$store.dispatch('me/logout')
    },
  },
}
</script>
<style scoped>
.hamburger {
  display: none;
}
@media screen and (max-width: 768px) {
  .hamburger {
    display: block;
  }
}
</style>
<style>
.el-input.is-active .el-input__inner, .el-input__inner:focus {
  border-color: #d3d9db;
}
</style>
<i18n>
  {
    "en": {
      "login": "login"
    },
    "zh": {
      "login": "登录"
    }
  }
</i18n>
