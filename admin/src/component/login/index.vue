<template>
  <div v-if="!me.auth" class="center bg-black" style="width: 100%; height: 100%; position: fixed; top: 0;">
    <div class="center c-white" style="width: 444px; height: 300px; position: relative;">
      <div style="width: 90%;">
        <div style="margin-bottom: 10px; width: 100%; font-size: 42px; font-family: Impact;">AutosSav</div>
        <div style="width: 100%; font-size: 18px;">Welcome back,</div>
        <div style="margin-bottom: 30px; width: 100%; font-size: 18px;">sign in to continue to AutosSave</div>
        <div style="margin-bottom: 50px;">
          <section class="center" style="margin-bottom: 10px; width: 100%; height:60px; border: solid 1px rgba(255, 255, 255, 0.1);">
            <div class="center" style="margin-left: 10px; width: 23px; height: 23px; opacity: 0.6;"><i class="el-icon-edit c-white" style="font-size:23px"></i></div>
            <input class="c-white f-c" style="margin: 0 10px; flex: 1; background: transparent; border: 0;" placeholder="admin" v-model="form.username">
          </section>
          <section class="center" style="width: 100%; height: 60px; border: solid 1px rgba(255, 255, 255, 0.1);">
            <div class="center" style="margin-left: 10px; width: 23px; height: 23px; opacity: 0.6;"><i class="el-icon-edit c-white" style="font-size:23px"></i></div>
            <input class="c-white f-c" :type="showPassword?'text':'password'" style="margin: 0 10px; background: transparent; border: 0; flex: 1;" placeholder="password" v-model="form.password">
            <div class="center" style="margin-right: 10px; width: 23px; height: 23px; opacity: 0.6;" @click="showPassword=!showPassword"><img src="../../assets/img/logo.png" style="width: 100%; height: 100%"/></div>
          </section>
        </div>
        <section class="center" style="margin-bottom: 10px;">
          <div v-if="loading" class="center" style="width: 100%;"><loading style="width: 50px; height: 50px;"/></div>
          <button v-else class="btn-blue f-t3" style="width: 100%; height: 50px; border-radius: 2px; font-weight: 500;" @click="login">LOG IN</button>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import loading from '@/component/loading'
export default {
  data() {
    return {
      loading: false,
      form: {
        username: process.env.NODE_ENV === 'production' ? '' : 'testusername2@hiveel.com',
        password: process.env.NODE_ENV === 'production' ? '' : 'testpassword',
      },
      showPassword: false,
    }
  },
  computed: {
    me() { return this.$store.state.me },
  },
  components: {
    loading,
  },
  methods: {
    async login() {
      this.loading = true
      await Promise.all([this.$store.dispatch('me/login', this.form), this.$wait(10000)])
      this.loading = false
    },
  },
}
</script>

<style scoped>
</style>
