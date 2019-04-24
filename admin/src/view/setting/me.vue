<template>
  <div>
  <article v-if="!edit"  class="center">
    <div style="margin: 0 auto; width: 96%;">
      <article class="bg-white border-grey" style="margin-bottom: 30px;">
        <div class="bottomline-grey" style="margin-bottom: 30px;">
          <section class="df df-jcsb df-aic" style="margin: 0 auto; width: 85%; height: 60px;">
            <div class="f-t2">Account Setting</div>
            <div class="df df-jcfe" style="width: 100px; ">
              <div class="pointer" style="height: 100%;" @click="changeEdit(true)">Edit</div>
            </div>
          </section>
        </div>
        <el-form class="" style="margin: 0 auto; width: 85%; " @submit.native.prevent>
          <section class="df" style="margin-bottom: 20px;">
            <div class="df df-aic" style="width: 120px; height: 40px;">Account Name</div>
            <el-form-item style="width: 300px;">acc name</el-form-item>
          </section>
          <section class="df" style="margin-bottom: 20px;">
            <div class="df df-aic" style="width: 120px; height: 40px;">Password</div>
            <el-form-item style="width: 300px;">***</el-form-item>
          </section>
        </el-form>
      </article>
    </div>
  </article>
  <article v-else class="center">
    <div style="margin: 0 auto; width: 96%;">
      <article class="bg-white border-grey" style="margin-bottom: 30px;">
        <div class="bottomline-grey" style="margin-bottom: 30px;">
          <section class="df df-jcsb df-aic" style="margin: 0 auto; width: 85%; height: 60px;">
            <div class="f-t2">Account Setting</div>
            <div v-if="loading" style="width: 100px;"><loading style="width: 30px; height: 30px;"/></div>
            <div v-else class="df df-jcsb" style="width: 100px; ">
              <div class="pointer" style="height: 100%;" @click="changeEdit(false)">Cancel</div>
              <div class="pointer" style="height: 100%;" @click="update">Save</div>
            </div>
          </section>
        </div>
        <el-form class="" style="margin: 0 auto; width: 85%; " :model="form" :rules="rules" ref="form" @submit.native.prevent>
          <section class="df" style="margin-bottom: 20px;">
            <div class="df df-aic" style="width: 120px; height: 40px;">Account Name</div>
            <el-form-item style="width: 300px;" prop="username"><el-input v-model="form.username" placeholder="Account Name"></el-input></el-form-item>
          </section>
          <div class="df df-jcsb df-wrap" style="width: 100%;">
            <section class="df" style="margin-bottom: 20px; flex: 1;">
              <div class="df df-aic" style="width: 120px; height: 40px;">Password</div>
              <el-form-item style="width: 300px;" prop="password"><el-input style="width: 100%;" type="password" v-model="form.password" placeholder="New password"></el-input></el-form-item>
            </section>
            <section class="df" style="margin-bottom: 20px; ">
              <div class="df df-aic" style="width: 120px; height: 40px;">Re-Password</div>
              <el-form-item style="width: 300px;" prop="comfirmPassword"><el-input style="width: 100%;" type="password" v-model="form.comfirmPassword" placeholder="Re-enter password"></el-input></el-form-item>
            </section>
          </div>
        </el-form>
      </article>
    </div>
  </article>
  </div>
</template>
<script>
import loading from '@/component/loading'
export default {
  data() {
    return {
      edit: false,
      loading: false,
      form: {},
      rules: {
        username: [ { required: true } ],
        password: [ { required: true } ],
        comfirmPassword: [ { validator: (rule, value, callback) => { this.form.password === this.form.confirmPassword ? callback() : callback() } } ],
      },

    }
  },
  components: { loading },
  methods: {
    changeEdit(e) {
      this.edit = e
      if (this.edit) {
        this.form = {
          username: '',
          password: '',
        }
      }
    },
    update() {
      this.$refs.form.validate(async valid => {
        if (!valid) return
        this.loading = true
        let payload = { oldPassword: this.form.oldPassword, password: this.form.password }
        await Promise.all([this.$store.dispatch('me/updatePassword', payload), this.$wait(1000)])
        this.loading = false
        this.changeEdit(false)
      })
    },
  },
}
</script>

<style scoped>
</style>
<style>
</style>
