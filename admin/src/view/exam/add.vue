<template>
  <div style="">
    <section class="bottomline-grey center bg-white" style="margin-bottom: 30px;">
      <div class="" style="margin: 0 auto; width: 96%;">
        <div class="df df-aic pointer" style="height: 60px;" @click="go('examList')">
          <span class="c-grey">Service Management</span>&nbsp;/&nbsp;<span>Add Service Task</span>
        </div>
      </div>
    </section>
    <div style="margin: 0 auto; width: 96%;">
      <article class="bg-white border-grey" style="margin-bottom: 30px;">
        <div class="f-t2 bottomline-grey" style="margin-bottom: 30px;">
          <section class="df df-aic" style="margin: 0 auto; width: 85%; height: 60px;">Add Service Task</section>
        </div>
        <el-form class="" style="margin: 0 auto; width: 85%; " :model="form" :rules="rules" ref="form" @submit.native.prevent>
          <section class="df" style="margin-bottom: 20px;">
            <div class="df df-aic" style="width: 120px; height: 40px;">Name</div>
            <el-form-item style="flex: 1; " prop="name"><el-input v-model="form.name"></el-input></el-form-item>
          </section>
          <section class="df" style="margin-bottom: 20px;">
            <div class="df df-aic" style="width: 120px; height: 40px;">Description</div>
            <div style="flex: 1;"><el-input :autosize="{ minRows: 3, maxRows: 5}" type="textarea" v-model="form.content"></el-input></div>
          </section>
          <section class="df" style="margin-bottom: 20px;">
            <div class="df df-aic" style="width: 120px; height: 40px;">Type</div>
            <el-form-item style="max-width: 300px;" prop="type">
              <el-select v-model="form.type">
                <el-option v-for="e in typeList" :key="e.value" :label="e.label" :value="e.value"></el-option>
              </el-select>
            </el-form-item>
          </section>
        </el-form>
      </article>
      <section class="df df-jcfe" style="width: 100%;">
        <div v-if="loading" class="center" style="width: 160px;"><loading style="width: 40px; height: 40px;"/></div>
        <button v-else class="btn-blue f-t2" style="width: 160px; height: 40px;" @click="save">Save</button>
      </section>
    </div>
  </div>
</template>
<script>
import loading from '@/component/loading'
export default {
  data() {
    return {
      typeList: [ { value: 'INSPECTION', label: 'Inspection' }, { value: 'ISSUE', label: 'Issue' } ],
      form: { type: '' },
      loading: false,
      rules: {
        name: [ { required: true } ],
        type: [ { required: true } ],
      },
    }
  },
  computed: {

  },
  components: { loading },
  created() {
    this.form.type = this.$route.params.type
  },
  methods: {
    go(e) {
      this.$router.push({ name: e })
    },
    async save() {
      this.$refs.form.validate(async valid => {
        if (!valid) return
        this.loading = true
        await Promise.all([this.$store.dispatch('exam/save', this.form), this.$wait(1000)])
        this.loading = false
      })
    },
  },
}
</script>
